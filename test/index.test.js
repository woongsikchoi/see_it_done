console.log('Starting index.test.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceBold, _Trace_Table, _Trace_Heading } = _test
/* eslint-enable */

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
function testRunner (traceLevel = 0) {
  let isRoot = require('lamed_io').isRootFolder() // const _lio = require('lamed_io')
  _Trace({ isRoot })
  if (isRoot) return

  _Trace_Set(traceLevel)
  const done2 = (err) => {
    if (err !== undefined) { throw err }
  }
  TestAll(done2) // Only run if not executed from the root folder
  _logGreen('Success!!!')
}
testRunner(0)

// Exports --------------------------
module.exports = { TestAll }
