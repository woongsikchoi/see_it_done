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

const {tableCreateEmpty, tableCreate, tableCheck, tableColsAdd, tableRowAdd, tableColsNumber, tableRowSet} = require('lamed_table') // eslint-disable-line

require('lamed_string')
const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
const _packSetup = require('./package_zetup.json')
const _root = _lfolder.fromRootFolder('', -1)

// const _ProjectFolder = _lfolder.fromRootFolder()

async function runlocal (local = true) {
  let projects = _packSetup.projects
  let table = tableCreate(['name', 'version'], 'packages')
  for (let ii = 0; ii < projects.length; ii++) {
    let module = projects[ii]
    let packageName = _root + module + '/package.json'
    // _log({item})

    // Find the package.json file and sync
    let package1 = jsonGet(packageName)
    tableRowAdd(table, [package1.name, package1.version])

    // Go through dependencies
    let dependencies = package1.dependencies
    for (const npm in dependencies) {
      if (npm === '//') continue // <--------------------------
      let version = dependencies[npm]
      let row = tableFind(table, 'name', npm)
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
  _log(`Run 'setupyarn.bat to update dependencies`)
  _logLine()
}

runlocal(true)
// runlocal(false)

function tableFind (table, colName, value) {
  let colNo = tableColsNumber(table, colName)
  for (let ii = 0; ii < table.rows.length; ii++) {
    let row = table.rows[ii]
    let item = row[colNo]
    if (item.toLowerCase() === value.toLowerCase()) return row
  }
}

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
