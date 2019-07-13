'use strict'
console.log('Starting badge.js...')
// ------------------------------------------------------
// badge.js
// Purpose: The purpose of this module is to create badges
// Date Created: 2019/07/13
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
// con.useChalk(require('chalk'))
// con.traceSet(0)

require('lamed_string')
const _badge = require('./lbadge')
const _scan = require('./deepscan')

/**
 * Github badges
 */
function github (data) {
  this.userName = data.userName
  this.project = data.project

  this.link = _badge.githubLink(this.userName, this.project)
  this.releases = _badge.githubReleases(this.userName, this.project)
  this.hitCount = _badge.githubHitcount(this.userName, this.project)
  this.codeSize = _badge.githubSize_Code(this.userName, this.project)
  this.repoSize = _badge.githubSize_Repo(this.userName, this.project)
}

/**
 * Release badges
 */
function releases (data) {
  this.userName = data.userName.toLowerCase()
  this.project = data.project.toLowerCase()

  this.npmRelease = _badge.npmRelease(this.userName, this.project)
  this.npmDownloads = _badge.npmDownload_Total(this.userName, this.project)
  this.travisBuild = _badge.travisBuild(this.userName, this.project)
  this.codeCoverage = _badge.codeCoverage(this.userName, this.project)
}

/**
 * Code quality badges
 */
function quality (data) {
  this.userName = data.userName
  this.project = data.project

  this.codeFactor = _badge.codeFactor(this.userName, this.project)
  this.codeDependencies = _badge.githubDependencies(this.userName, this.project)
  this.vulnerabilities = _badge.githubVulnerabilities(this.userName, this.project)
  this.deepScan = _scan.deepScan(this.userName, this.project)
}

/**
 * Development Badges
 */
function development (data) {
  this.userName = data.userName
  this.project = data.project

  this.issuesOpen = _badge.githubIssues_Open(this.userName, this.project)
  this.issuesClosed = _badge.githubIssues_Closed(this.userName, this.project)
  this.commits = _badge.githubCommit_Activity(this.userName, this.project)
  this.lastCommit = _badge.githubCommit_LastDay(this.userName, this.project)
  this.maintenance = _badge.githubCommit_Maintenance(this.userName, this.project)
}

/**
 * Return the markdown badge
 * @param userName - The github username
 * @param project - The project name
 */
function badge (userName, project) {
  this.DATA = { userName, project }

  this.github = new github(this.DATA)
  this.releases = new releases(this.DATA)
  this.quality = new quality(this.DATA)
  this.development = new development(this.DATA)
}

module.exports = { badge }