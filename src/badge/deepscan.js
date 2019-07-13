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
  'development': 'Modules to help with development',
  "perezlamed/lamed_core": '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6044/branches/48311/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6044&bid=48311)',
  'perezlamed/lamed_console': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6356/branches/52830/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6356&bid=52830)',
  'perezlamed/lamed_test': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6045/branches/48312/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6045&bid=48312)',
  'perezlamed/lamed_build': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6362/branches/52836/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6362&bid=52836)',
  'perezlamed/lamed_dev': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6358/branches/52832/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6358&bid=52832)',
  'perezlamed/lamed_badge' : '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6357/branches/52831/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6357&bid=52831)',
  'perezlamed/see_it_start': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6370/branches/52845/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6370&bid=52845)',
  "perezlamed/see_it_done": "[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6046/branches/48313/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6046&bid=48313)",

  'general': 'Modules for general use',
  'perezlamed/lamed_string': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6367/branches/52842/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6367&bid=52842)',
  "perezlamed/lamed_io": "[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/4474/branches/36076/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=4474&bid=36076)",
  "perezlamed/lamed_folder": '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/4472/branches/36075/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=4472&bid=36075)',
  'perezlamed/lamed_filesearch': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6359/branches/52833/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6359&bid=52833)',
  'perezlamed/lamed_name': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6365/branches/52839/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6365&bid=52839)',
  'perezlamed/lamed_json': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6363/branches/52837/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6363&bid=52837)',
  'perezlamed/lamed_table': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6366/branches/52840/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6366&bid=52840)',

  'focused': 'Focused modules',
  'perezlamed/lamed_vscode': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6368/branches/52843/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6368&bid=52843)',
  'perezlamed/lamed_markdown': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6364/branches/52838/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6364&bid=52838)',
  'perezlamed/lamed_learn': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6369/branches/52844/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6369&bid=52844)',

  'frontend': 'Modules for frontend',
  'perezlamed/lamed_floweditor': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6361/branches/52835/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6361&bid=52835)',
  'perezlamed/lamed_flowchart': '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6360/branches/52834/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6360&bid=52834)',

}

function deepScan(userName, project) {
  let key = userName + '/' + project
  let value = _deepScan[key]
  if (notOk(value)) throw new Error(`Module '${key}' not found. You need to register it\n`)
  return value
}
unZip(() => deepScan('perezlamed', 'lamed_learn'),
  '[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6369/branches/52844/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6369&bid=52844)')
//unZip(() => deepScan('perezlamed', 'lamed_learn2')) // Test error

// Exports --------------------------
module.exports = { deepScan }
