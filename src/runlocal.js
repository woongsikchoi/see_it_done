console.log('Starting runlocal.js...')
// ------------------------------------------------------
// runlocal.js
// Purpose: The purpose of this....
// Date Created: 2019/06/12
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const {
  notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceGreen, _TraceBold, _Trace_Table, _Trace_Heading, testAND
} = _test
/* eslint-enable */
// _Trace_Set(0)

const _table = require('lamed_table') // eslint-disable-line

require('lamed_string')
const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
const _packSetup = require('./package_zetup.json')
const _root = _lfolder.fromRootFolder('', -1)

// const _ProjectFolder = _lfolder.fromRootFolder()

/**
 * Work with code changes locally
 * @param {bool} local - If true then install all packages locally; else use npm packages
 */
async function runlocal (local = true) {
  let projects = _packSetup.projects
  let project_exclude = _packSetup.projects_local_exclude // eslint-disable-line
  let table = _table.create(['name', 'version'], 'packages')
  for (let ii = 0; ii < projects.length; ii++) {
    let module = projects[ii]

    if (module.includesAny(project_exclude)) continue // <-----------------------------------
    let packageName = _root + module + '/package.json'
    _log({ packageName })

    // Find the package.json file and sync
    let package1 = jsonGet(packageName)
    _table.rowAdd(table, [package1.name, package1.version])

    // Go through dependencies
    let dependencies = package1.dependencies
    for (const npm in dependencies) {
      if (npm === '//') continue // <--------------------------
      let version = dependencies[npm]
      let row = _table.rowFind(table, 'name', npm)
      if (Ok(row)) {
        if (local) {
          // local --------------------------
          if (version.includes('../') === false) {
            _log({ npm, version, row })
            dependencies[npm] = '../' + npm // Set to local repo
          }
        } else {
          // Remove ------------------------
          if (version.includes('../') === true) {
            _log({ npm, version, row })
            dependencies[npm] = '^' + row[1] // Restore the version
          }
        }
      }
    }
    // write update
    let buffer = JSON.stringify(package1, null, 2) + '\n'
    _lio.writeFileSync(packageName, buffer)
  }
  // tableCheck(table, true)
  _log()
  _logLine()
  _log(`Run '"local.bat" to update dependencies`)
  _logLine()
}

runlocal(true)
// runlocal(false)

/**
 * If the file exist, then return it
 * @param name
 * @returns {*}
 */
function jsonGet (packageName) {
  if (_lio.exist(packageName) === false) throw new Error(`'${packageName}' does not exist.`)
  _log({ packageName })
  let package1 = require(packageName)
  return package1
}
