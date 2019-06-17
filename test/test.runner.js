console.log('Starting test.runner.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceBold, _Trace_Table, _Trace_Heading } = _test
/* eslint-enable */

const _run = require('./index.test')

// _Trace_Set(0)

describe('index.js', () => {
  it('About()', (done) => {
    if (_run.TestAll(done)) done()
  })
})

// Exports --------------------------
module.exports = {}
