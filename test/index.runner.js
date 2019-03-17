console.log('Starting index.runner.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceBold, _Trace_Table, _Trace_Heading } = _test
/* eslint-enable */

const _run = require('./index.test')

_Trace_Set(0)
// ------------------------------------------------------------------------------------------
const _Node_Version = _test._Node_Version // eslint-disable-line
_TraceLine()
_Trace('TEST RESULTS:')
_Trace(`Node version: ${_Node_Version.major}.${_Node_Version.minor}. ${_Node_Version.patch}`)
_TraceLine()
// ------------------------------------------------------------------------------------------

describe('index.js', () => {
  it('About()', (done) => {
    _run.TestAll(done)
  })
})

// Exports --------------------------
module.exports = {}
