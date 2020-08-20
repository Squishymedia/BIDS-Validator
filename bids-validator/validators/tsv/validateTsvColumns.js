import utils from '../../utils'
const Issue = utils.issues.Issue
import nonCustomColumns from '../../bids_validator/tsv/non_custom_columns.json'

/**
 * @param {Object} file - BIDS file object
 * Accepts file object and returns a type based on file path
 */
export const getTsvType = function(file) {
  let tsvType = 'misc'
  if (file.relativePath.includes('phenotype/')) {
    tsvType = 'phenotype'
  } else if (file.name === 'participants.tsv') {
    tsvType = 'participants'
  } else if (
    file.name.endsWith('_channels.tsv') ||
    file.name.endsWith('_electrodes.tsv') ||
    file.name.endsWith('_events.tsv') ||
    file.name.endsWith('_scans.tsv') ||
    file.name.endsWith('_sessions.tsv') ||
    file.name.endsWith('_aslcontext.tsv')
  ) {
    const split = file.name.split('_')
    tsvType = split[split.length - 1].replace('.tsv', '')
  }
  return tsvType
}

/**
 *
 * @param {array} headers -Array of column names
 * @param {string} type - Type from getTsvType
 * Checks TSV column names to determine if they're core or custom
 * Returns array of custom column names
 */
const getCustomColumns = function(headers, type) {
  const customCols = []
  // Iterate column headers
  for (let col of headers) {
    // If it's a custom column
    if (!nonCustomColumns[type].includes(col)) {
      customCols.push(col)
    }
  }
  return customCols
}

/**
 *
 * @param {array} tsvs - Array of objects containing TSV file objects and contents
 * @param {Object} jsonContentsDict
 */
const validateTsvColumns = function(tsvs, jsonContentsDict, headers) {
  const tsvIssues = []
  tsvs.map(tsv => {
    const customColumns = getCustomColumns(
      tsv.contents
        .replace(/^\uefff/, '')
        .split('\n')[0]
        .trim()
        .split('\t'),
      getTsvType(tsv.file),
    )
    if (customColumns.length > 0) {
      // Get merged data dictionary for this file
      const potentialSidecars = utils.files.potentialLocations(
        tsv.file.relativePath.replace('.tsv', '.json'),
      )
      const mergedDict = utils.files.generateMergedSidecarDict(
        potentialSidecars,
        jsonContentsDict,
      )
      const keys = Object.keys(mergedDict)
      // Gather undefined columns for the file
      const undefinedCols = customColumns.filter(col => !keys.includes(col))
      // Create an issue for all undefined columns in this file
      undefinedCols.length &&
        tsvIssues.push(
          customColumnIssue(
            tsv.file,
            undefinedCols.join(', '),
            potentialSidecars,
          ),
        )
    }
  })
  // Return array of all instances of undescribed custom columns

  // Manage custom instances made from asl_context 
  
  // Manage custom instances from asl_context tsv files
  // get all headers associated with asl_context data
  tsvs.map(tsv => {
    const aslHeaders = headers.filter(header => {
      const file = header[0]
      return file.relativePath.includes('_asl')
    })
    
    aslHeaders.forEach(aslHeader => {
      // extract the fourth element of 'dim' field of header - this is the
      // number of volumes that were obtained during scan (numVols)
      const file = aslHeader[0]
      const header = aslHeader[1]
      const dim = header.dim
      const numVols = dim[4]

      // get the json sidecar dictionary associated with that nifti scan
      var potentialSidecars = utils.files.potentialLocations(
        file.relativePath.replace('.gz', '').replace('.nii', '.json'),
      )
    
      // get the _asl_context.tsv associated with this asl scan
      const potentialAslContext = utils.files.potentialLocations(
        file.relativePath.replace('.gz', '').replace('asl.nii', 'aslcontext.tsv'),
      )
      const associatedAslContext = potentialAslContext.indexOf(tsv.file.relativePath)
      
      
      if (associatedAslContext > -1)
      {
        const rows = tsv.contents
        .split('\n')
        .filter(row => !(!row || /^\s*$/.test(row)))
        
        const asl_filters = ['cbf','m0scan','label','control','deltam','volume_type'];
        const filtered_tsv_rows = rows.filter(row => asl_filters.includes(row))
        if (rows.length != filtered_tsv_rows.length)
        {
          tsvIssues.push(
            new Issue({
              code: 176,
              file: file,
            })
          )
        }

        if (rows.length -1 != numVols) {
          tsvIssues.push(
            new Issue({
              code: 165,
              file: file,
            })
          )
        }

        const m0scan_filters = ['m0scan'];
        

        // Get merged data dictionary for this file
        potentialSidecars = utils.files.potentialLocations(
          tsv.file.relativePath.replace('aslcontext.tsv', 'asl.json'),
        )
        const mergedDict = utils.files.generateMergedSidecarDict(
          potentialSidecars,
          jsonContentsDict,
        )
        // check Flip Angle requirements with LookLocker acquisitions
        if (
            mergedDict.hasOwnProperty('FlipAngle') &&
            mergedDict.hasOwnProperty('LookLocker') &&
            mergedDict['FlipAngle'].constructor === Array
          ) 
        {
          let FlipAngle = mergedDict['FlipAngle']
          const FlipAngleLength = FlipAngle.length
          if (FlipAngleLength !== rows.length -1) {
            tsvIssues.push(
              new Issue({
                file: file,
                code: 172,
                reason:
                  "''FlipAngle' for this file do not match the TSV lenght." 
              }),
            )
          }
        }
        // check Labelling Duration matching with TSV lenght only for PCASL or CASL
        if 
        (
          mergedDict.hasOwnProperty('LabelingDuration') &&
          mergedDict['LabelingDuration'].constructor === Array &&
          mergedDict.hasOwnProperty('LabelingType') &&
          (mergedDict['LabelingType'] == 'CASL' || mergedDict['LabelingType'] == 'PCASL')
        ) 
        {
          let LabelingDuration = mergedDict['LabelingDuration']
          const LabelingDurationLength = LabelingDuration.length
          if (LabelingDurationLength !== rows.length -1) {
            tsvIssues.push(
              new Issue({
                file: file,
                code: 175,
                reason:
                  "''LabelingDuration' for this file do not match the TSV lenght." 
              }),
            )
          }
        }

        // check Post Labelling Delays matching with TSV lenght
        if (
            mergedDict.hasOwnProperty('PostLabelingDelay') &&
            mergedDict['PostLabelingDelay'].constructor === Array
          ) 
        {
          let PostLabelingDelay = mergedDict['PostLabelingDelay']
          const PostLabelingDelayLength = PostLabelingDelay.length
          if (PostLabelingDelayLength !== rows.length -1) {
            tsvIssues.push(
              new Issue({
                file: file,
                code: 174,
                reason:
                  "''PostLabelingDelay' for this file do not match the TSV lenght." 
              }),
            )
          }
        }
        
      }
    })
  })
  return tsvIssues
}



const customColumnIssue = function(file, col, locations) {
  return new Issue({
    code: 82,
    file: file,
    evidence:
      'Columns: ' +
      col +
      ' not defined, please define in: ' +
      locations.toString().replace(',', ', '),
  })
}

export default validateTsvColumns
