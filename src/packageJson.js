'use strict'
console.log('Starting packageSync.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const {
  notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceGreen, _TraceBold, _Trace_Table, _Trace_Heading
} = _test
/* eslint-enable */
// _Trace_Set(0)

const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
require('lamed_string')
const _packAdd = require('./package_add.json')
const _packUpdate = require('./package_update.json')
const _packSetup = require('./package_zetup.json')
const _root = _lfolder.fromRootFolder('', -1)
const _ProjectFolder = _lfolder.fromRootFolder()

/*
[Find all project json files]
[do Add]
[do Update]
//
*/

async function syncPackages () {
  let projects = _packSetup.projects
  let exclude_add = _packSetup.projects_add_exclude // eslint-disable-line
  let exclude_git = _packSetup.projects_gitignore_exclude // eslint-disable-line
  const _gitIgnore = await _lio.readFile(_ProjectFolder + '.gitignore')

  for (let ii = 0; ii < projects.length; ii++) {
    let file = projects[ii]
    let packageName = _root + file + '/package.json'
    // _log({item})

    // Find the package.json file and sync
    let package1 = {}
    let packNew = {}
    // Package.json add ---------------------------------
    if (file.includesAny(exclude_add) === false) {
      package1 = jsonGet(packageName)
      packNew = jsonSync(_packAdd, package1)
      if (Ok(packNew)) {
        let buffer = JSON.stringify(packNew, null, 2) + '\n'
        await _lio.writeFile(packageName, buffer)
      }
    }

    // Package json update -------------------------
    package1 = jsonGet(packageName)
    packNew = jsonSync(_packUpdate, package1, true)
    if (Ok(packNew)) {
      let buffer = JSON.stringify(packNew, null, 2) + '\n'
      await _lio.writeFile(packageName, buffer)
    }

    // GitIgnore -------------------------------------
    if (file.includesAny(exclude_git) === false) {
      let gitIgnorePath = _root + file + '/.gitIgnore'
      let gitIgnore = await _lio.readFile(gitIgnorePath)
      if (_gitIgnore !== gitIgnore) {
        await _lio.writeFile(gitIgnorePath, _gitIgnore)
      }
    }
    // return
  }
}

syncPackages()

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

/**
 * Add items if not exist, and sync items if sycn is true
 * @param template
 * @param pack
 * @param sync - if true also update the item values
 * @returns {*}
 */
function jsonSync (template, pack, sync = false) {
  let update = false
  for (const index in template) {
    if (index === '//') continue // <--------------------------
    let item = template[index]
    // let property = { index, item }

    // Check item
    let test = pack[index]
    if (notOk(test)) {
      update = true
      _logGreen(`Update '${index}'`)
      pack[index] = item
      continue // <-------------------------------------
    }
    if (typeof item !== 'object') {
      // Simple type ------------------------------
      if (sync && pack[index] !== item) {
        update = true
        _logGreen(`Update '${index}'`)
        pack[index] = item
      }
      // _log({property})
    } else {
      // This is an object  -------------
      for (const index2 in item) {
        if (index2 === '//') continue
        let item2 = item[index2]
        let property2 = { index2, item2 }
        // _log({property2})
        let test1 = pack[index]
        let test2 = test1[index2]
        // _log({test2})
        if (notOk(test2)) {
          update = true
          if (item2 === '') {
            _logGreen(`Remove '${index}.${index2}'`)
            delete test1[index2]
          } else {
            _logGreen(`Update '${index}.${index2}'`)
            _log({ property2 })
            test1[index2] = item2
          } // if value is '' remove it
        } else if (sync && test1[index2] !== item2) {
          update = true
          _logGreen(`Update '${index}.${index2}'`)
          test1[index2] = item2
        }
      }
    }
  }
  if (update) return pack
}

// Exports --------------------------
module.exports = {}
