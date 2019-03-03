console.log('Starting flowedit.test.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _larray = require('lamed_array')
const {Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed, _Trace_Set, _Trace, _Trace_Table, _Trace_Heading } = _larray // eslint-disable-line
const _run = require('./flowedit.run')

describe('lamed_folder', () => {
  it('FileSetup()', (done) => {
    _run.Internal().test_File_OutputFile()
    done()
  })
})

describe('index.js', () => {
  it('About()', (done) => {
    if (_run.About() !== true) throw new Error(`Value 'About()' is not correct.`)
    done()
  })
})

// Exports --------------------------
module.exports = {}
