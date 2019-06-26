console.log('Starting gitCheck.js...')
// ------------------------------------------------------
// gitCheck.js
// Purpose: The purpose of this module is to check git repos
// Date Created: 2019/06/24
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND } = _test // eslint-disable-line
// con.traceSet(0)

const _git = require('git-state')
var path = 'c:/projects/see_it_done'

_git.isGit(path, function (exists) {
  if (!exists) return

  _git.check(path, function (err, result) {
    if (err) throw err
    result.name = 'see_it_done'
    con.log(result) // => { branch: 'master', ahead: 0, dirty: 9, untracked: 1, stashes: 0 }
  })
})
