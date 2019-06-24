console.log('Starting gitCheck.js...')
// ------------------------------------------------------
// gitCheck.js
// Purpose: The purpose of this module is to check git repos
// Date Created: 2019/06/24
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceGreen, _TraceBold, _Trace_Table, _Trace_Heading, testAND } = _test
/* eslint-enable */
// _Trace_Set(0)

const _git = require('git-state')
var path = 'c:/projects/see_it_done'

_git.isGit(path, function (exists) {
  if (!exists) return

  _git.check(path, function (err, result) {
    if (err) throw err
    result.name = 'see_it_done'
    _log(result) // => { branch: 'master', ahead: 0, dirty: 9, untracked: 1, stashes: 0 }
  })
})
