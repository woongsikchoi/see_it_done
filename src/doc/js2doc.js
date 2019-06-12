console.log('Starting js2doc.js...')
// ------------------------------------------------------
// js2doc.js
// Purpose: The purpose of this....
// Date Created: 2019/06/09
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceGreen, _TraceBold, _Trace_Table, _Trace_Heading } = _test
/* eslint-enable */
// _Trace_Set(0)

const _lio = require('lamed_io')
// const _folder = require('lamed_folder')

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

function project2doc (folder) {
  if (_lio.existFolder(folder) === false) throw new Error(`'${folder}' does not exist`)
  let packageFile = folder + 'package.json'
  let package1 = jsonGet(packageFile)
  let mainFile = folder + 'src\\lTest.js'
  let main = jsonGet(mainFile)

  _log(Object.keys(package1))
  _log(package1['main']) // main js file
  // 'description'
  // 'version'
  // 'name'

  _log(Object.keys(main)) // show all exports
  _log(main['Ok'].toString()) // show function contents

  // typeof _test['Compare'] === function
  // Get description & main file

  // Open main file

  // Read exports

  // Get comments for exports
}
project2doc('C:\\Projects\\lamed_test\\')

/**
 * Compare huge strings
 * @param result - The expected result
 * @param stringValue - The string value to compare against
 * @param trace - The trace level
 * @param trim - If true -> trim the line before compare. Default is true
 * @param lineBr - The line break character. Default is \n
 * @returns {boolean} - True if the items and the comare values are the same
 */
function Compare (result, stringValue, trim = false, lineBr = '\n') {}
Compare()
/**
 *
 * @param {*} result
 * @param {*} stringValue
 * @param {*} trim
 * @param {*} lineBr
 */
