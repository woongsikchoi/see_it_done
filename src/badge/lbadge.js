'use strict'
console.log('Starting lbadge.js...')
// ------------------------------------------------------
// lbadge.js
// Purpose: The purpose of this module is to generate markdown badge for a project
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
function githubLink (userName, project) {
  return `[${project}](https://github.com/${userName}/${project})`
}
unZip(() => githubLink('perezlamed', 'lamed_core'),
  '[lamed_core](https://github.com/perezlamed/lamed_core)')

/**
 * Show badge of the npm version number and link to the npm page
 * @param project - The project name
 * @returns {string} - The link
 */
function npmRelease (project) {
  return `[![npm](https://img.shields.io/npm/v/${project}.svg)](https://www.npmjs.org/package/${project})`
}
unZip(() => npmRelease('lamed_core'),
  '[![npm](https://img.shields.io/npm/v/lamed_core.svg)](https://www.npmjs.org/package/lamed_core)')

/**
 * Show badge of the travis build status of the project
 * @param {string} userName - The user name
 * @param {string} project - The project name
 * @returns {string} - The badge markdown
 */
function travisBuild (userName, project) {
  return `[![Build Status](https://travis-ci.org/${userName}/${project}.svg?branch=master)](https://travis-ci.org/${userName}/${project})`
}
unZip(() => travisBuild('perezlamed', 'lamed_core'),
  '[![Build Status](https://travis-ci.org/perezlamed/lamed_core.svg?branch=master)](https://travis-ci.org/perezlamed/lamed_core)')

/**
 * Return markdown of the code coverage status
 * @param {string} userName - The user name
 * @param {string} project - The project name
 * @returns {string} - The badge markdown
 */
function codeCoverage (userName, project) {
  return `[![codecov](https://codecov.io/gh/${userName}/${project}/branch/master/graph/badge.svg)](https://codecov.io/gh/${userName}/${project})`
}
unZip(() => codeCoverage('perezlamed', 'lamed_core'),
  '[![codecov](https://codecov.io/gh/perezlamed/lamed_core/branch/master/graph/badge.svg)](https://codecov.io/gh/perezlamed/lamed_core)')

/**
 * Markdown badge of the code quality factor score
 * @param {string} userName - The user name
 * @param {string} project - The project name
 * @returns {string} - The badge markdown
 */
function codeFactor (userName, project) {
  return `[![CodeFactor](https://www.codefactor.io/repository/github/${userName}/${project}/badge)](https://www.codefactor.io/repository/github/${userName}/${project})`
}
unZip(() => codeFactor('perezlamed', 'lamed_core'),
  '[![CodeFactor](https://www.codefactor.io/repository/github/perezlamed/lamed_core/badge)](https://www.codefactor.io/repository/github/perezlamed/lamed_core)')

/**
 * Markdown badge of the total downloads of the project
 * @param {string} project - The project name
 * @returns {string} - The badge markdown
 */
function npmDownload_Total (project) { // eslint-disable-line
  return `[![downloads](http://img.shields.io/npm/dt/${project}.svg?style=flat)](https://www.npmjs.org/package/${project})`
}
unZip(() => npmDownload_Total('lamed_core'),
  '[![downloads](http://img.shields.io/npm/dt/lamed_core.svg?style=flat)](https://www.npmjs.org/package/lamed_core)')

function githubIssues_Open (userName, project) {
  return `[![open issues](https://img.shields.io/github/issues-raw/${userName}/${project}.svg)](https://github.com/${userName}/${project}/issues)`
}
unZip(() => githubIssues_Open('perezlamed', 'lamed_core'),
  '[![open issues](https://img.shields.io/github/issues-raw/perezlamed/lamed_core.svg)](https://github.com/perezlamed/lamed_core/issues)')

function githubIssues_Closed (userName, project) {
  return `[![closed issues](https://img.shields.io/github/issues-closed-raw/${userName}/${project}.svg)](https://github.com/${userName}/${project}/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed)`
}
unZip(() => githubIssues_Closed('perezlamed', 'lamed_core'),
  '[![closed issues](https://img.shields.io/github/issues-closed-raw/perezlamed/lamed_core.svg)](https://github.com/perezlamed/lamed_core/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed)')

function githubSize_Code(userName, project) {
  return `[![code size](https://img.shields.io/github/languages/code-size/${userName}/${project}.svg)](http://npm.broofa.com/?q=${project})`
}
unZip(() => githubSize_Code('perezlamed', 'lamed_core'),
  '[![code size](https://img.shields.io/github/languages/code-size/perezlamed/lamed_core.svg)](http://npm.broofa.com/?q=lamed_core)')

function githubSize_Repo (userName, project) {
  return `[![repo size](https://img.shields.io/github/repo-size/${userName}/${project}.svg)](http://npm.broofa.com/?q=${project})`
}
unZip(() => githubSize_Repo('perezlamed', 'lamed_core'),
  '[![repo size](https://img.shields.io/github/repo-size/perezlamed/lamed_core.svg)](http://npm.broofa.com/?q=lamed_core)')

function githubCommit_Activity (userName, project) {
  return `[![commit activity](https://img.shields.io/github/commit-activity/m/${userName}/${project}.svg)](https://github.com/${userName}/${project}/graphs/contributors)`
}
unZip(() => githubCommit_Activity('perezlamed', 'lamed_core'),
  '[![commit activity](https://img.shields.io/github/commit-activity/m/perezlamed/lamed_core.svg)](https://github.com/perezlamed/lamed_core/graphs/contributors)')

function githubCommit_LastDay(userName, project) {
  return `[![last commit](https://img.shields.io/github/last-commit/${userName}/${project}.svg)](https://github.com/${userName}/${project}/graphs/commit-activity)`
}
unZip(() => githubCommit_LastDay('perezlamed', 'lamed_core'),
  '[![last commit](https://img.shields.io/github/last-commit/perezlamed/lamed_core.svg)](https://github.com/perezlamed/lamed_core/graphs/commit-activity)')

function githubCommit_Maintenance (userName, project, maintained = 'yes', year = '2019') {
  return `[![Maintenance](https://img.shields.io/maintenance/${maintained}/${year}.svg)](https://github.com/${userName}/${project}/graphs/commit-activity)`
}
unZip(() => githubCommit_Maintenance('perezlamed', 'lamed_core'),
  '[![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)](https://github.com/perezlamed/lamed_core/graphs/commit-activity)')

function githubDependencies (userName, project) {
  return `[![dependencies Status](https://david-dm.org/${userName}/${project}/status.svg)](https://david-dm.org/${userName}/${project})`
}
unZip(() => githubDependencies('perezlamed', 'lamed_core'),
  '[![dependencies Status](https://david-dm.org/perezlamed/lamed_core/status.svg)](https://david-dm.org/perezlamed/lamed_core)')

function githubVulnerabilities(userName, project) {
 return `[![Known Vulnerabilities](https://snyk.io/test/github/${userName}/${project}/badge.svg?targetFile=package.json)](https://snyk.io/test/github/${userName}/${project}?targetFile=package.json)`
}
unZip(() => githubVulnerabilities('perezlamed', 'lamed_core'),
  '[![Known Vulnerabilities](https://snyk.io/test/github/perezlamed/lamed_core/badge.svg?targetFile=package.json)](https://snyk.io/test/github/perezlamed/lamed_core?targetFile=package.json)')

function githubReleases (userName, project) {
  return `[![Github releases](https://img.shields.io/github/downloads/${userName}/${project}/total.svg)](https://github.com/${userName}/${project}/releases)`
}
unZip(() => githubReleases('perezlamed', 'lamed_core'),
  '[![Github releases](https://img.shields.io/github/downloads/perezlamed/lamed_core/total.svg)](https://github.com/perezlamed/lamed_core/releases)')

function githubHitcount(userName, project) {
  return `[![HitCount](http://hits.dwyl.io/${userName}/${project}.svg)](https://github.com/${userName}/${project}/graphs/traffic)`
}
unZip(() => githubHitcount('perezlamed', 'lamed_core'),
  '[![HitCount](http://hits.dwyl.io/perezlamed/lamed_core.svg)](https://github.com/perezlamed/lamed_core/graphs/traffic)')

// Exports --------------------------
module.exports = {
  // Github
  githubLink,
  githubReleases,
  githubHitcount,
  githubSize_Code,
  githubSize_Repo,
  // Release
  npmRelease,
  travisBuild,
  codeCoverage,
  npmDownload_Total,
  // Quality
  codeFactor,
  githubDependencies,
  githubVulnerabilities,
  // Development
  githubIssues_Open,
  githubIssues_Closed,
  githubCommit_Activity,
  githubCommit_LastDay,
  githubCommit_Maintenance
}
