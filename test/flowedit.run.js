console.log('Starting flowedit.run.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

// const _test = require('./lamed_array')
const _test = require('lamed_array')
const {Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed, _Trace_Set, _Trace, _Trace_Table, _Trace_Heading } = _test // eslint-disable-line
// const _app = require('../src/flowedit')
const _help = require('../src/helper')

const About = () => true

// Exports --------------------------
module.exports = { About, Internal: _help.Internal }
