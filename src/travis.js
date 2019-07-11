'use strict'
console.log('Starting travis.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND } = _test // eslint-disable-line
// con.traceSet(0)

const _lio = require('lamed_io')
_lio.About()
const _lfolder = require('lamed_folder')

const _packSetup = require('./package_zetup.json')
const _root = _lfolder.fromRootFolder('', -1)

/**
 * Turn specific setting on
 * @param travisSettings - The settings
 * @param type - Type of setting
 * @param setting - the setting
 * @returns {string} - travisSettings
 */
function SettingOn (travisName, travisSettings, type, setting) {
  let setting1 = '- ' + setting
  if (travisSettings.includes(setting1) === false) throw new Error(`"${travisName}" ${type} setting does not include "${setting1}"`)
  travisSettings = travisSettings.replace('# ' + setting1, setting1)
  return travisSettings
}

/**
 * Turn specific setting off
 * @param travisSettings
 * @param type - Type of setting
 * @param setting - The setting
 * @returns travisSettings
 */
function SettingOff (travisName, travisSettings, type, setting) {
  if (travisSettings.includes(setting) === false) throw new Error(`"${travisName}" ${type} setting does not include "${setting}"`)
  if (travisSettings.includes('# ' + setting)) return travisSettings

  travisSettings = travisSettings.replace(setting, '# ' + setting)
  return travisSettings
}

/**
 * Turn .travis.yml settings on
 * @string travisSettings
 * @string os - The OS (Operating System) settings
 * @string node_js - The node settings
 * @returns {*}
 */
function travisSettingsOn (travisName, travisSettings, os, nodeJS) {
  // Os
  for (let ii = 0; ii < os.length; ii++) {
    let os1 = os[ii]
    travisSettings = SettingOn(travisName, travisSettings, 'Os', os1)
  }

  // Node
  for (let ii = 0; ii < nodeJS.length; ii++) {
    let nodeJs1 = nodeJS[ii]
    travisSettings = SettingOn(travisName, travisSettings, 'node_js', nodeJs1)
  }
  return travisSettings
}

/**
 * Turn all build settings off
 * @string travisName - The name of the .travis.yml file
 * @returns {Promise<*|any>}
 */
async function travisSettingsOff (travisName) {
  let travisSettings = await _lio.readFile(travisName)

  // Os
  travisSettings = SettingOff(travisName, travisSettings, 'Os', '- linux')
  travisSettings = SettingOff(travisName, travisSettings, 'Os', '- osx')

  // Node
  travisSettings = SettingOff(travisName, travisSettings, 'Node', '- node')
  travisSettings = SettingOff(travisName, travisSettings, 'Node', "- '11'")
  travisSettings = SettingOff(travisName, travisSettings, 'Node', "- '10'")
  travisSettings = SettingOff(travisName, travisSettings, 'Node', "- '8'")
  travisSettings = SettingOff(travisName, travisSettings, 'Node', "- '6'")
  travisSettings = SettingOff(travisName, travisSettings, 'Node', '- lts/*')
  return travisSettings
}

/**
 * Update the .travis file for projects
 * @returns {Promise<void>}
 */
async function travisUpdate () {
  let projects = _packSetup.projects
  let travis = _packSetup.travis
  let os = travis.os
  let osQuick = travis.os_quick
  let nodeJS = travis.node_js
  let nodeJSquick = travis.node_js_quick
  let travisExclude = _packSetup.travis_exclude
  let travisMode = _packSetup.travis_mode

  for (let ii = 0; ii < projects.length; ii++) {
    let module = projects[ii]
    if (module.includesAny(travisExclude) === true) continue // <-------------------------------
    con.log({ module })

    // .travis.yml sync ---------------------------------
    let travisName = _root + module + '/.travis.yml'
    let travisSettings = ''
    // try {
    travisSettings = await travisSettingsOff(travisName)
    if (travisMode === 'quick') travisSettings = travisSettingsOn(travisName, travisSettings, osQuick, nodeJSquick)
    else travisSettings = travisSettingsOn(travisName, travisSettings, os, nodeJS)
    // } catch (e) {
    //   throw e
    // }

    await _lio.writeFile(travisName, travisSettings)
    // return // Only do first one
  }
}
travisUpdate()

// Exports --------------------------
module.exports = {}
