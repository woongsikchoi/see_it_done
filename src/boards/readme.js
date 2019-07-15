'use strict'
console.log('Starting readme.js...')
// ------------------------------------------------------
// readme.js
// Purpose: The purpose of this....
// Date Created: 2019/07/14
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
// con.useChalk(require('chalk'))
// con.traceSet(0)

const _badge = require('lamed_badge')
const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
const _ProjectFolder = _lfolder.fromRootFolder()

function ReadmeGenerate () {
  let username = 'perezlamed'
  let project = 'see_it_done'

  let badge = new _badge.Badge(username, project)
  let md = ''
  // releases
  md += '\n**Releases:**\n'
  md += badge.releases.npmRelease + '\n'
  md += badge.releases.travisBuild + '\n'
  md += badge.releases.codeCoverage + '\n'
  md += badge.releases.npmDownloads + '\n'

  // quality
  md += '\n**Quality:**\n'
  md += badge.quality.codeDependencies + '\n'
  md += badge.quality.codeFactor + '\n'
  md += badge.quality.deepScan + '\n'
  md += badge.quality.vulnerabilities + '\n'

  // github
  md += '**Github:**\n'
  md += badge.github.codeSize + '\n'
  md += badge.github.repoSize + '\n'
  md += badge.github.hitCount + '\n'
  md += badge.github.releases + '\n'

  // development
  md += '\n**Development:**\n'
  md += badge.development.commits + '\n'
  md += badge.development.issuesClosed + '\n'
  md += badge.development.issuesOpen + '\n'
  md += badge.development.lastCommit + '\n'
  md += badge.development.maintenance + '\n'

  // Write test file
  let outfile = _ProjectFolder + 'docs/readme.md'
  _lio.writeFileSync(outfile, md)
}
ReadmeGenerate()
