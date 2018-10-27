const assert = require('assert')
const utils = require('../utils')
const missingSessionFiles = require('../validators/session')
const dir = process.cwd()
const data_dir = dir + '/tests/data/'
const test_data = data_dir + 'ds006_missing-session'

describe('session', () => {
  let filelist

  beforeEach(() => {
    utils.files.readDir(test_data, files => {
      filelist = files
    })
  })

  it('should produce a single MISSING_SESSION warning', () => {
    const warnings = missingSessionFiles(filelist)
    const targetWarning = warnings.find(warning => warning.key === 'MISSING_SESSION')
    assert.ok(targetWarning)
  })
  
  it('should not produce INCONSISTENT_SUBJECTS warnings', () => {
    const warnings = missingSessionFiles(filelist)
    console.log('WARNINGS: ', warnings)
    warnings.forEach(warning => 
      assert.notEqual(warning.key, 'INCONSISTENT_SUBJECTS')
    )
  })
})