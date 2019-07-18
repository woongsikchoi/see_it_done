'use strict'
console.log('Starting dashboard.js...')
// ------------------------------------------------------
// dashboard.js
// Purpose: The purpose of this....
// Date Created: 2019/07/14
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
// con.useChalk(require('chalk'))
// con.traceSet(0)

const _badge = require('lamed_badge')
const _packSetup = require('../package_zetup.json')
const _table = require('lamed_table')
const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
const _help = require('../helper')

const _ProjectFolder = _lfolder.fromRootFolder()

function dashboard () {
  let Badge = new _badge.BadgeFunction() // eslint-disable-line

  let username = 'perezlamed'
  let projects = _packSetup.projects

  // con.log({links, releases, builds, coverages, issues, commits, codeFactors, deepScans, hits})
  let dtDashboard = new _table.TableDef(['no', 'module'], 'dashboard')
  dtDashboard.arrayAppend(projects.map(x => Badge.githubLink(username, x)))
  dtDashboard.array2Col(projects.map(x => Badge.releaseNPM(x)), 'npm')
  dtDashboard.array2Col(projects.map(x => Badge.releaseTravisBuild(username, x)), 'travis')
  dtDashboard.array2Col(projects.map(x => Badge.releaseCodeCoverage(username, x)), 'coverage')
  dtDashboard.array2Col(projects.map(x => Badge.devIssuesOpen(username, x)), 'issues')
  dtDashboard.array2Col(projects.map(x => Badge.qualityDeepScan(username, x)), 'deepScans')
  // dtDashboard.array2Col(projects.map(x => Badge.qualityCodeFactor(username, x)), 'codeFactors')
  // dtDashboard.array2Col(projects.map( x => badge.devLastCommit(username, x)), 'commits')
  // dtDashboard.array2Col(projects.map(x => Badge.qualityCodeDependencies(username, x)), 'dependencies')
  // dtDashboard.array2Col(projects.map(x => Badge.githubHitcount(username, x)), 'hits')
  // dtDashboard.show()
  let row = dtDashboard.Rows.Include('module', 'lamed_dev', true)
  let ignoreStr = '----'
  dtDashboard.Rows.Set(row, 'npm', ignoreStr)
  dtDashboard.Rows.Set(row, 'travis', ignoreStr)
  dtDashboard.Rows.Set(row, 'coverage', ignoreStr)

  let md = dtDashboard.toMD()
  md += _help.FooterLinks()

  _lio.writeFileSync(_ProjectFolder + 'docs/' + 'Dashboard.md', md)
}
dashboard()
