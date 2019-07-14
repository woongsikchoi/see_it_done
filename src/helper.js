'use strict'
console.log('Starting helper.js...')
// ------------------------------------------------------
// helper.js
// Purpose: The purpose of this....
// Date Created: 2019/07/14
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
// con.useChalk(require('chalk'))
// con.traceSet(0)

const _lio = require('lamed_io')

function FooterLinks () {
  let result =
    '- [Dashboard](./Dashboard.md),\n' +
    '- [Dependencies](./Dependencies.md) and\n' +
    '- [User stories](./UserStories.md)'
  return result
}

/**
 * If the file exist, then return it
 * @param name
 * @returns {*}
 */
function jsonGet (packageName) {
  if (_lio.exist(packageName) === false) throw new Error(`'${packageName}' does not exist.`)
  con.log({ packageName })
  let package1 = require(packageName)
  return package1
}

// Exports --------------------------
module.exports = { FooterLinks, jsonGet }
