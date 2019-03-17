console.log('Starting index.js.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceBold, _Trace_Table, _Trace_Heading } = _test
/* eslint-enable */

/* Get the application version */
const _package = require('../package.json')
function Version (log) {
  let version = _package.version
  if (log) _log(`Version: ${version}`)
  return version
}

/* return about message */
function About (log = true) {
  let about = _package.name + ' (' + _package.version + ')'
  if (log) _log(about)
  return about
}

Version(true)
About(true)

// Exports --------------------------
module.exports = { About }
