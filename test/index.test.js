console.log('Starting index.test.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _larray = require('lamed_array')
const {Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed, _Trace_Set, _Trace, _Trace_Table, _Trace_Heading } = _larray // eslint-disable-line
const _app = require('../src/index')

_log(_app.About(true))

// Exports --------------------------
module.exports = {}
