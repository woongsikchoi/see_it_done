'use strict'
console.log('Starting npmBatch.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceGreen, _TraceBold, _Trace_Table, _Trace_Heading } = _test
/* eslint-enable */
// _Trace_Set(0)

const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')

/**
 *  Create the header for the batch file
 * @param root
 */
function header (command, root = 'c:\\projects\\') {
  let template =
    'echo on\n' +
    `REM ----[ ${command} ]---\n` +
    `set path1=${root}\n` +
    'echo path=%path1%\n' +
    'REM ---------------------\n' +
    'pause\n' +
    'cls\n' +
    '\n' +
    'cd %path1%\n\n'
  return template
}

/**
 * Create the body for the batch file
 * @param project
 * @param isFirst
 * @param timeout
 */
function body (project, command, isFirst = false, timeout = 20) {
  let template = ''
  if (isFirst === false) template += `timeout /t ${timeout}\n`
  template +=
    `cd ${project}\n` +
    `${command}\n` +
    'cd %path1%\n' +
    `echo ----------------------------------[${project}\n\n`
  return template
}

/**
 * Build the batch file
 * @param projects
 * @param root
 * @param timeout
 */
function buildFile (projects, command, root = 'c:\\projects\\', timeout = 20) {
  let result = header(command, root)
  for (let ii = 0; ii < projects.length; ii++) {
    let item = projects[ii]
    result += body(item, command, (ii === 0), timeout)
  }
  return result
}

const _root = _lfolder.fromRootFolder('', -1)
const _projects = require('./package_zetup')
const _timeout = _projects.timeout

function writeBatch () {
  let scripts = _projects.commands
  for (const item in scripts) {
    let command = scripts[item]
    let path = _root + item + '.bat'
    let file = buildFile(_projects.projects, command, _root, _timeout)
    _log(`Writing '${path}'...`)
    _logGreen(` '${command}'\n`)
    _lio.writeFile(path, file)
  }
}
writeBatch()

// Exports --------------------------
module.exports = {}
