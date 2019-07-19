'use strict'
console.log('Starting npmBatch.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND } = _test // eslint-disable-line
// con.traceSet(0)

const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
require('lamed_string')

/**
 *  Create the header for the batch file
 * @param root
 */
function header (npm, cmd, descr, root = 'c:\\projects\\') {
  if (notOk(descr)) descr = npm
  if (notOk(descr)) descr = cmd
  let template = ''
  if (Ok(npm)) {
    // npm --------------------------------
    template +=
    'echo off\n' +
    `REM ----[ ${descr} ]---\n` +
    `echo "${npm}"\n` +
    `set path1=${root}\n` +
    'echo path=%path1%\n' +
    'REM ---------------------\n' +
    'pause\n' +
    'cls\n' +
    '\n' +
    'cd %path1%\n\n'
  } else {
    // cmd ---------------------------------
    template +=
      'echo off\n' +
      `REM ----[ ${descr} ]---\n` +
      `echo "${cmd}"\n` +
      'REM ---------------------\n' +
      'pause\n' +
      'cls\n\n'
  }

  return template
}

function header2 (project, progress) {
  let header = `echo ----------------------------------[${project} ${progress}]\n`
  return header
}
/**
 * Create the body for the batch file
 * @param project
 * @param isFirst
 * @param timeout
 */
function bodyNPM (project, npm, progress, isFirst = false, timeout = 10) {
  let template = ''
  if (isFirst === false) {
    template += `timeout /t ${timeout}\n` + header2(project, progress)
  }
  template +=
  `cd ${project}\n` +
    `${npm}\n` +
    'cd %path1%\n' + header2(project, progress) + '\n'
  return template
}

/**
 * Create the body for the batch file
 * @param project
 * @param isFirst
 * @param timeout
 */
function bodyCMD (project, cmd, progress, isFirst = false, timeout = 10) {
  let template = ''
  // if (isFirst === false) template += `timeout /t ${timeout}\n`
  template += `echo ----------------------------------[${project} ${progress}] \n${cmd}\n\n`
  template = template.replaceAll('$repo_name$', project)
  return template
}

/**
 * Build the batch file
 * @param projects
 * @param root
 * @param timeout
 */
function buildBatFile (projects, exclude, npm, cmd, descr, root = 'c:\\projects\\', timeout = 10) {
  let result = header(npm, cmd, descr, root)

  if (Ok(npm)) {
    // npm -------------------------
    for (let ii = 0; ii < projects.length; ii++) {
      let item = projects[ii]
      if (item.includesAny(exclude)) continue // <----------------------------------------
      let score = Math.round((ii + 1) * 100 / projects.length)
      let progress = ` ${score}%%... (${(ii + 1)} of ${projects.length})`
      result += bodyNPM(item, npm, progress, (ii === 0), timeout)
    }
  } else {
    // cmd -----------------------------
    for (let ii = 0; ii < projects.length; ii++) {
      let item = projects[ii]
      if (item.includesAny(exclude)) continue // <------------------------------------
      let score = Math.round((ii + 1) * 100 / projects.length)
      let progress = ` ${score}%%... (${(ii + 1)} of ${projects.length})`
      result += bodyCMD(item, cmd, progress, (ii === 0), timeout)
    }
  }
  return result
}

const _root = _lfolder.fromRootFolder('', -1)
const _projects = require('./package_zetup')
const _timeout = _projects.timeout

async function writeBatch () {
  let scripts = _projects.commands
  for (const item in scripts) {
    let commdef = scripts[item]
    let npm = commdef['npm']
    let cmd = commdef['cmd']
    let descr = commdef['description']
    let timeout = commdef['timeout']
    if (timeout === undefined) timeout = _timeout
    let path = _root + item + '.bat'
    let file = buildBatFile(_projects.projects, _projects.projects_bat_exclude, npm, cmd, descr, _root, timeout)

    con.log(`Writing '${path}'...`)
    if (Ok(npm)) con.logGreen(` '${npm}'\n`)
    else con.logGreen(` '${cmd}'\n`)
    file = file.replaceAll('\n', '\r\n')
    file += '\r\npause'
    await _lio.writeFile(path, file)
  }
  let projects = _projects.projects
  con.log({ projects })
}
writeBatch()

// Exports --------------------------
module.exports = {}
