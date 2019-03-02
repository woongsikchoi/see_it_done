console.log('Starting index.js.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _larray = require('lamed_array')
const {Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed, _Trace_Set, _Trace, _Trace_Table, _Trace_Heading } = _larray // eslint-disable-line

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
