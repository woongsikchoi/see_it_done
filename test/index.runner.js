console.log('Starting index.runner.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _larray = require('lamed_array')
const {Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed, _Trace_Set, _Trace, _Trace_Table, _Trace_Heading } = _larray // eslint-disable-line
const _run = require('./index.test')

describe('index.js', () => {
  it('About()', (done) => {
    _run.TestAll(done)
  })
})

// Exports --------------------------
module.exports = {}
