'use strict'
console.log('Starting deepscan.js...')
// ------------------------------------------------------
// deepscan.js
// Purpose: The purpose of this....
// Date Created: 2019/07/13
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
// con.useChalk(require('chalk'))
// con.traceSet(0)

const _deepScan = {
  "perezLamed/see_it_done": "[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6046/branches/48313/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6046&bid=48313)"
}

function deepScan(userName, project) {
  let key = userName + '/' + project
  let value = _deepScan[key]
  return value
}

// Exports --------------------------
module.exports = { deepScan }
