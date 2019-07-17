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
  let links = projects.map(x => Badge.githubLink(username, x))
  let releases = projects.map(x => Badge.releaseNPM(x))
  let builds = projects.map(x => Badge.releaseTravisBuild(username, x))
  let coverages = projects.map(x => Badge.releaseCodeCoverage(username, x))
  let issues = projects.map(x => Badge.devIssuesOpen(username, x))
  let deepScans = projects.map(x => Badge.qualityDeepScan(username, x))
  // let codeFactors = projects.map(x => Badge.qualityCodeFactor(username, x))
  // let commits = projects.map( x => badge.devLastCommit(username, x))
  let depends = projects.map(x => Badge.qualityCodeDependencies(username, x))
  let hits = projects.map(x => Badge.githubHitcount(username, x))

  // Ignore lamed_dev for some items
  let ignore = projects.indexOf('lamed_dev')
  let ignoreStr = '----'
  releases[ignore] = ignoreStr
  builds[ignore] = ignoreStr
  coverages[ignore] = ignoreStr

  // con.log({links, releases, builds, coverages, issues, commits, codeFactors, deepScans, hits})
  let dtDashboard = new _table.TableDef(['no', 'module'], 'dashboard')
  dtDashboard.arrayAppend(links)
  dtDashboard.array2Col(releases, 'npm')
  dtDashboard.array2Col(builds, 'travis')
  dtDashboard.array2Col(coverages, 'coverage')
  dtDashboard.array2Col(issues, 'issues')
  dtDashboard.array2Col(deepScans, 'deepScans')
  // dtDashboard.array2Col(codeFactors, 'codeFactors')
  // dtDashboard.array2Col(commits, 'commits')
  dtDashboard.array2Col(depends, 'dependencies')
  dtDashboard.array2Col(hits, 'hits')
  // dtDashboard.show()
  let md = dtDashboard.toMD()
  md += _help.FooterLinks()

  _lio.writeFileSync(_ProjectFolder + 'docs/' + 'Dashboard.md', md)
}
dashboard()
