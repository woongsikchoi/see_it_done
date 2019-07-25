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
const Badge = new _badge.BadgeFunction() // eslint-disable-line

function dashboardCreate (projects, username, name = 'dashboard') {
  // con.log({links, releases, builds, coverages, issues, commits, codeFactors, deepScans, hits})
  let dtDashboard = new _table.TableDef(['no', 'module'], name)
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
  return md
}

function dashboard () {
  let username = 'perezlamed'
  let projects = _packSetup.projects
  let md = dashboardCreate(projects, username)
  _lio.writeFileSync(_ProjectFolder + 'docs/' + 'Dashboard.md', md)
}
dashboard()

function projects () {
  let result = []
  let moduleTypes = Object.keys(_packSetup.packages)
  for (let ii = 0; ii < moduleTypes.length; ii++) {
    let item = moduleTypes[ii]
    let mods = _packSetup.packages[item]
    result = result.concat(mods)
  }
  return result
}
con.unZip(()=> projects())

function dashboard2 () {
  let username = 'perezlamed'
  let moduleTypes = Object.keys(_packSetup.packages)
  // let mods = _packSetup.packages[moduleTypes[0]]
  // con.log({moduleTypes, mods})
  let md = '# Dashboards\n\n'
  for (let ii = 0; ii < moduleTypes.length; ii++) {
    let item = moduleTypes[ii]
    let mods = _packSetup.packages[item]
    let md1 = dashboardCreate(mods, username, item)
    let file = `dash_${item}.md`
    _lio.writeFileSync(_ProjectFolder + 'docs/' +file, md1)
    md += `- [${item} (${mods.length})](${file})\n`
  }
  _lio.writeFileSync(_ProjectFolder + 'docs/' + 'Dashboard2.md', md)
}
dashboard2()