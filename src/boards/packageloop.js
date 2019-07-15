'use strict'
console.log('Starting packageloop.js...')
// ------------------------------------------------------
// packageloop.js
// Purpose: The purpose of this....
// Date Created: 2019/07/15
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
// con.useChalk(require('chalk'))
// con.traceSet(0)

const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
const _table = require('lamed_table')
require('lamed_string')
const _packSetup = require('../package_zetup.json')
const _root = _lfolder.fromRootFolder('', -1)
const _ProjectFolder = _lfolder.fromRootFolder()
const _help = require('../helper')

function packageloop (table) {
  let projects = _packSetup.projects

  for (let ii = 0; ii < projects.length; ii++) {
    let module = projects[ii]
    let packageName = _root + module + '/package.json'
    let package1 = _help.jsonGet(packageName)
    let row = []
    for (let ii = 0; ii < table.DATA.cols.length; ii++) {
      let col = table.DATA.cols[ii]
      let value = package1[col]
      if (col.includes('.')) {
        let col1 = col.split0('.')
        let col2 = col.split99('.')
        let value1 = package1[col1]
        // con.log({ col, col1, col2, value1 })
        value = value1[col2]
      }
      row.push(value)
    }
    table.Rows.Add(row)
  }
}

function mergeLists (names, versions, func) {
  let merge = []
  names.forEach((item, ii) => {
    merge.push(func(item, versions[ii]))
  })
  return merge
}

function mergeColumns (colResult, dtTest, name, version, func) {
  let names = dtTest.Cols.toArray(name)
  let versions = dtTest.Cols.toArray(version)
  let merge = mergeLists(names, versions, func)
  dtTest.array2Col(merge, colResult)
  // if (colResult === name) dtTest.Cols.Drop(version) // If the result is part of the merge -> remove the other column
  // else if (colResult === version) dtTest.Cols.Drop(name)
}

function packageloopTest () {
  let dtTest = new _table.TableDef(['name', 'version', 'readme.role']) //, 'readme.task', 'readme.reason'])
  packageloop(dtTest)
  // dtTest.show()

  // let names = dtTest.Cols.toArray('name')
  // let versions = dtTest.Cols.toArray('version')
  // let merge = mergeLists(names, versions, (x, y) => { return x + '<br>' + y })
  mergeColumns('name', dtTest, 'name', 'version', (x, y) => { return `**${x}** <br> (${y})` })
  // dtTest.array2Col(merge, 'name')
  // dtTest.Cols.Drop('version')
  dtTest.show()

  // dtTest.DATA.cols = ['name', 'version', 'As a', 'I want to', 'So that I can']
  let md = dtTest.toMD()
  let outfile = _ProjectFolder + 'docs/UserStories2.md'
  _lio.writeFileSync(outfile, md)
}
packageloopTest()
