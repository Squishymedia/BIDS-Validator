import files from '../files'
import checkForDerivatives from './checkForDerivatives'
import collectModalities from './collectModalities'
import collectSessions from './collectSessions'
import collectSubjects from './collectSubjects'

const collectSummary = (fileList, options) => {
  const summary = {
    sessions: [],
    subjects: [],
    subjectMetadata: {},
    tasks: [],
    modalities: [],
    totalFiles: -1,
    size: 0,
    dataProcessed: false,
  }

  summary.dataProcessed = checkForDerivatives(fileList)

  // remove ignored files from list:
  Object.keys(fileList).forEach(function(key) {
    if (fileList[key].ignore) {
      delete fileList[key]
    }
  })

  summary.totalFiles = Object.keys(fileList).length

  //collect file directory statistics
  summary.size = files.collectDirectorySize(fileList)

  // collect modalities for summary
  summary.modalities = collectModalities(fileList)

  // collect subjects
  summary.subjects = collectSubjects(fileList, options)

  // collect sessions
  summary.sessions = collectSessions(fileList, options)

  return summary
}

export default collectSummary
