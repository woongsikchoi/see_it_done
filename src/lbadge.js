'use strict'
console.log('Starting lbadge.js...')
// ------------------------------------------------------
// lbadge.js
// Purpose: The purpose of this....
// Date Created: 2019/07/11
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
con.useChalk(require('chalk'))
// con.traceSet(0)

/**
 * Show project name and link to github page
 * @param userName - The user name
 * @param project - The project name
 * @returns {string} - The link
 */
function projectLink (userName, project) {
  return `[${project}](https://github.com/${userName}/${project})`
}
unZip(() => projectLink('perezlamed', 'lamed_core'),
  '[lamed_core](https://github.com/perezlamed/lamed_core)')

/**
 * Show the npm version number and link to the npm page
 * @param project - The project name
 * @returns {string} - The link
 */
function npm (project) {
  return `[![npm](https://img.shields.io/npm/v/${project}.svg)](https://www.npmjs.org/package/${project})`
}
unZip(() => npm('lamed_core'),
  '[![npm](https://img.shields.io/npm/v/lamed_core.svg)](https://www.npmjs.org/package/lamed_core)')

function travisBuild (userName, project) {
  return `[![Build Status](https://travis-ci.org/${userName}/${project}.svg?branch=master)](https://travis-ci.org/${userName}/${project})`
}
unZip(() => travisBuild('perezlamed', 'lamed_core'),
  '[![Build Status](https://travis-ci.org/perezlamed/lamed_core.svg?branch=master)](https://travis-ci.org/perezlamed/lamed_core)')

function codeCoverage (userName, project) {
  return `[![codecov](https://codecov.io/gh/${userName}/${project}/branch/master/graph/badge.svg)](https://codecov.io/gh/${userName}/${project})`
}
unZip(() => codeCoverage('perezlamed', 'lamed_core'),
  '[![codecov](https://codecov.io/gh/perezlamed/lamed_core/branch/master/graph/badge.svg)](https://codecov.io/gh/perezlamed/lamed_core)')

function codeFactor (userName, project) {
  return `[![CodeFactor](https://www.codefactor.io/repository/github/${userName}/${project}/badge)](https://www.codefactor.io/repository/github/${userName}/${project})`
}
unZip(() => codeFactor('perezlamed', 'lamed_core'),
  '[![CodeFactor](https://www.codefactor.io/repository/github/perezlamed/lamed_core/badge)](https://www.codefactor.io/repository/github/perezlamed/lamed_core)')

function download_Total (project) { // eslint-disable-line
  return `[![downloads](http://img.shields.io/npm/dt/${project}.svg?style=flat)](https://www.npmjs.org/package/${project})`
}
unZip(() => download_Total('lamed_core'),
  '[![downloads](http://img.shields.io/npm/dt/lamed_core.svg?style=flat)](https://www.npmjs.org/package/lamed_core)')
