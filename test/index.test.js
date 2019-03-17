console.log('Starting index.test.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceBold, _Trace_Table, _Trace_Heading } = _test
/* eslint-enable */

const _lio = require('lamed_io')
const _app = require('../src/index')

function test_1 (done) { // eslint-disable-line
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()` // eslint-disable-line

  _Trace(_app.About(true))
  // sync function
  // if (false) return done(new Error(error))
  // done()

  // async function
  // _lio.readFile(package1)
  //   .then((text) => {
  //     _Trace({ text })
  //     done()
  //   })
  //   .catch((err) => {
  //     done(new Error(error + '\n' + err.message))
  //   })
}

/**
 * Test all functions
 * @param done - callback function to indicate failure or completion
 * @constructor
 */
function TestAll (done) {
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line

  test_1(done)
  done()
}

/**
 * Execute the tests manually
 */
function testRunner () {
  _Trace_Set(0)
  const done2 = (err) => {
    if (err !== undefined) { throw err }
  }
  let isRoot = _lio.isRootFolder() // const _lio = require('lamed_io')
  _Trace({ isRoot })

  if (isRoot === false) TestAll(done2) // Only run if not executed from the root folder
}
testRunner()

// Exports --------------------------
module.exports = { TestAll }
