'use strict'
console.log('Starting packageJson.js...')
// Check projects versions
// in package.json add '../lib' <--> 'version'

/* jshint esversion: 6 */
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND } = _test // eslint-disable-line
// con.traceSet(0)

const _lio = require('lamed_io')
const _lfolder = require('lamed_folder')
require('lamed_string')
const _help = require('./helper')
const _packAdd = require('./package_add.json')
const _packUpdate = require('./package_update.json')
const _packSetup = require('./package_zetup.json')
const _root = _lfolder.fromRootFolder('', -1)
const _ProjectFolder = _lfolder.fromRootFolder()

/*
[Find all project json files]
[do Add]
[do Update]
//
*/
function syncPackages () {
  let projects = _packSetup.projects
  let exclude_add = _packSetup.projects_add_exclude // eslint-disable-line
  let exclude_git = _packSetup.projects_gitignore_exclude // eslint-disable-line
  let exclude_dep = _packSetup.projects_dependencies_exclude // eslint-disable-line
  let exclude_bat = _packSetup.projects_bat_exclude // eslint-disable-line
  let dependencyMD = dependency_Header()
  // let dashboards = dashboard_Header()
  let story = story_Header()

  const _gitIgnore = _lio.readFileSync(_ProjectFolder + '.gitignore')

  for (let ii = 0; ii < projects.length; ii++) {
    let module = projects[ii]
    let packageName = _root + module + '/package.json'
    // con.log({item})

    // Find the package.json file and sync
    let package1 = {}
    let packNew = {}
    // Package.json add ---------------------------------
    if (module.includesAny(exclude_add) === false) {
      package1 = _help.jsonGet(packageName)
      packNew = jsonSync(_packAdd, package1)
      if (Ok(packNew)) {
        let buffer = JSON.stringify(packNew, null, 2) + '\n'
        _lio.writeFileSync(packageName, buffer)
      }
    }

    // Package json update -------------------------
    package1 = _help.jsonGet(packageName)
    packNew = jsonSync(_packUpdate, package1, true)
    if (Ok(packNew)) {
      let buffer = JSON.stringify(packNew, null, 2) + '\n'
      _lio.writeFileSync(packageName, buffer)
    }

    // GitIgnore -------------------------------------
    if (module.includesAny(exclude_git) === false) {
      let gitIgnorePath = _root + module + '/.gitIgnore'
      let gitIgnore = _lio.readFileSync(gitIgnorePath)
      if (_gitIgnore !== gitIgnore) {
        _lio.writeFileSync(gitIgnorePath, _gitIgnore)
      }
    }

    // Dashboards -----------------------------------------
    // if (module.includesAny(exclude_bat) === false) dashboards += dashboard_Template(ii + 1, module)

    // Dependencies --------------------------------
    dependencyMD += dependency(ii + 1, package1, exclude_dep)
    // User stories
    story += story_(ii + 1, package1)
    // return
  }

  // _lio.writeFileSync(_ProjectFolder + 'docs/Dashboard.md', dashboards + _help.FooterLinks())
  dependencyMD = dependencyMD + dependency_footer(exclude_dep) + _help.FooterLinks()
  _lio.writeFileSync(_ProjectFolder + 'docs/Dependencies.md', dependencyMD)
  _lio.writeFileSync(_ProjectFolder + 'docs/UserStories.md', story + _help.FooterLinks())
}
syncPackages()

/**
 * Add items if not exist, and sync items if sycn is true
 * @param template
 * @param pack
 * @param sync - if true also update the item values
 * @returns {*}
 */
function jsonSync (template, pack, sync = false) {
  let update = false
  for (const index in template) {
    if (index === '//') continue // <--------------------------
    let item = template[index]
    // let property = { index, item }

    // Check item
    let test = pack[index]
    if (notOk(test)) {
      update = true
      con.logGreen(`Update '${index}'`)
      pack[index] = item
      continue // <-------------------------------------
    }
    if (typeof item !== 'object') {
      // Simple type ------------------------------
      if (sync && pack[index] !== item) {
        update = true
        con.logGreen(`Update '${index}'`)
        pack[index] = item
      }
      // con.log({property})
    } else {
      // This is an object  -------------
      for (const index2 in item) {
        if (index2 === '//') continue
        let item2 = item[index2]
        let property2 = { index2, item2 }
        // con.log({property2})
        let test1 = pack[index]
        let test2 = test1[index2]
        // con.log({test2})
        if (notOk(test2)) {
          update = true
          if (item2 === '') {
            con.logGreen(`Remove '${index}.${index2}'`)
            delete test1[index2]
          } else {
            con.logGreen(`Update '${index}.${index2}'`)
            con.log({ property2 })
            test1[index2] = item2
          } // if value is '' remove it
        } else if (sync && test1[index2] !== item2) {
          update = true
          con.logGreen(`Update '${index}.${index2}'`)
          test1[index2] = item2
        }
      }
    }
  }
  if (update) return pack
}

/**
 * Create dependency markdown information
 * @param pack
 * @returns {string}
 */
function dependency (no, pack, dependency_exclude) { // eslint-disable-line
  const { name, description, dependencies, devDependencies } = pack
  // con.logRed(name)
  // [lamed_core](https://github.com/perezLamed/lamed_core)
  let project = `[${name}](https://github.com/perezLamed/${name}) <br> [![npm](https://img.shields.io/npm/v/${name}.svg)](https://www.npmjs.org/package/${name})`
  let description2 = `[${description}](https://github.com/perezLamed/${name}/blob/master/doc/functions.md)`
  return dependency_Template(no, project, description2, dependencies, devDependencies, dependency_exclude)
}

/**
 * Header template for dependencies
 * @returns {string}
 */
function dependency_Header() { // eslint-disable-line
  let result =
    '# Project dependencies\n\n' +
    'No | Project | Description | Dependencies | devDependencies | Total\n' +
    ':----: | -------- | ------------ | :---------------: | :------------: | :-----:\n'

  return result
}

/**
 * Footer template for dependencies
 * @returns {string}
 */
function dependency_footer(dependency_exclude) { // eslint-disable-line
  let result = '\n## Excluded dependencies\n\n'

  for (let ii = 0; ii < dependency_exclude.length; ii++) {
    let item = dependency_exclude[ii]
    result += '- ' + item + '\n'
  }
  return result
}

/**
 * The dependency template for each project
 * @param project
 * @param description
 * @param dependencies
 * @param devDependencies
 * @param dependency_exclude
 * @returns {string}
 */
function dependency_Template(no, project, description, dependencies, devDependencies, dependency_exclude) { // eslint-disable-line
  let result = `${no} | **${project}** | ${description} | `

  let ii = 0
  for (const index in dependencies) {
    if (index === '//') continue // <--------------------------
    if (index.includesAny(dependency_exclude)) continue // <----------------

    let item = dependencies[index]
    if (ii !== 0) result += '<br>'
    let dep = index + '(' + item.replace('^', '') + ')'
    result += dep
    ii++
  }
  if (ii === 0) result += '----'

  result += ' | '
  let jj = 0
  for (const index in devDependencies) {
    if (index === '//') continue // <--------------------------
    if (index.includesAny(dependency_exclude)) continue // <----------------

    let item = devDependencies[index]
    if (jj !== 0) result += '<br>'
    let dep = index + '(' + item.replace('^', '') + ')'
    result += dep
    jj++
  }
  if (jj === 0) result += '----'

  result += ` | ${(ii + jj)}\n`
  return result
}

// /**
//  * Header template for dashboard
//  * @returns {string}
//  */
// function dashboard_Header() { // eslint-disable-line
//   let result =
//     '# Project dashboards\n\n' +
//     'No | Project  | NPM | Build | Coverage | Quality | Downloads\n' +
//     ':----: | ---- | :----: | ---- | ----- | ----- | :----:\n'

//   return result
// }

// function dashboard_Template(no, project) { // eslint-disable-line
//   let result = `${no} | [${project}](https://github.com/perezLamed/${project}) | ` +
//     `[![npm](https://img.shields.io/npm/v/${project}.svg)](https://www.npmjs.org/package/${project}) |` +
//     `[![Build Status](https://travis-ci.org/perezLamed/${project}.svg?branch=master)](https://travis-ci.org/perezLamed/${project}) |` +
//     `[![codecov](https://codecov.io/gh/perezLamed/${project}/branch/master/graph/badge.svg)](https://codecov.io/gh/perezLamed/${project}) |` +
//     `[![CodeFactor](https://www.codefactor.io/repository/github/perezlamed/${project}/badge)](https://www.codefactor.io/repository/github/perezlamed/${project}) |` +
//     `[![downloads](http://img.shields.io/npm/dt/${project}.svg?style=flat)](https://www.npmjs.org/package/${project})\n`

//   return result
// }

/**
 * Create dependency markdown information
 * @param pack
 * @returns {string}
 */
function story_ (no, pack) { // eslint-disable-line
  const { name, description, role, task, reason } = pack
  // con.logRed(name)
  let project = `[${name}](https://github.com/perezLamed/${name}) <br> [![npm](https://img.shields.io/npm/v/${name}.svg)](https://www.npmjs.org/package/${name})`
  let description2 = `[${description}](https://github.com/perezLamed/${name}/blob/master/doc/functions.md)`
  return story_Template(no, project, description2, role, task, reason)
}

/**
 * Header template for user stories
 * @returns {string}
 */
function story_Header() { // eslint-disable-line
  let result =
    '# User Stories\n\n' +
    'No | Project | Description | Story\n' +
    '---- | ---- | ---- | ----\n'

  return result
}

/**
 * The dependency template for each project
 * @param project
 * @param description
 * @param role
 * @param task
 * @param reason
 * @returns {string}
 */
function story_Template(no, project, description, role, task, reason) { // eslint-disable-line
  let result = `${no} | **${project}** | ${description} | `
  let story = `**AS A** <u>"${role}"</u> <br>**I WANT TO** <u>"${task}"</u><br> **SO THAT I CAN** <u>"${reason}"</u>\n`

  return result + story
}
// Exports --------------------------
module.exports = {}
