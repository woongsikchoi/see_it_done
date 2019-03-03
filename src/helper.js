console.log('Starting helper.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

// const _test = require('./lamed_array')
const _test = require('lamed_array')
const {Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed, _Trace_Set, _Trace, _Trace_Table, _Trace_Heading } = _test // eslint-disable-line
// const _app = require('../src/flowedit')

/**
 * Calculate output file name with specified extension. If only a folder is specified, the input file is used.
 * @param fileOrFolder - The output folder of filename
 * @string inputFile - The input file name. Default is 'output'
 * @string ext - The extension of the output file. Default is '.out'
 * @returns {string}
 */
function File_OutputFile (fileOrFolder, inputFile, ext = '.out') { // eslint-disable-line
  if (fileOrFolder.includes(ext)) return fileOrFolder

  if (inputFile === '') inputFile = 'output'
  let result = ''
  let pos0 = fileOrFolder.indexOf('.')
  if (pos0 > -1) {
    // wrong extension -> swap with ext
    result = fileOrFolder.substring(0, pos0) + ext
  } else {
    // only folder -> calculate output file
    let pos1 = inputFile.indexOf('.')
    if (pos1 === -1) result = inputFile
    else result = inputFile.substring(0, pos1)
    result = fileOrFolder + result + ext
  }
  return result
}

function test_File_OutputFile() { // eslint-disable-line
  let error = `function 'File_OutputFile()' failed in test case.`
  if (_test.Compare('output/file1.out', File_OutputFile('output/file1.out', 'file1.in', '.out')) !== true) throw new Error(error)
  if (_test.Compare('output/file2.out', File_OutputFile('output/', 'file2.in', '.out')) !== true) throw new Error(error)
  if (_test.Compare('output/file3.out', File_OutputFile('output/file3.bbb', 'file1.in', '.out')) !== true) throw new Error(error)
  if (_test.Compare('output/file4.out', File_OutputFile('output/', 'file4', '.out')) !== true) throw new Error(error)
}

_Trace_Set(-1)
test_File_OutputFile()

function Internal () {
  return { test_File_OutputFile }
}

// Exports --------------------------
module.exports = { Internal }
