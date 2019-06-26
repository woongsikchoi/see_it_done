console.log('Starting index.test.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND } = _test // eslint-disable-line
// con.traceSet(0)

// const _app = require('../src/index')

/**
 * Test all functions
 * @param done - callback function to indicate failure or completion
 * @constructor
 */
function TestAll (done) {
  con.traceLine()
  con.trace(module.filename)
  con.traceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line

  // test_1(done)
  done()
}

/**
 * Execute the tests manually
 */
function testRunner (traceLevel = 0) {
  let isRoot = require('lamed_io').isRootFolder() // const _lio = require('lamed_io')
  con.trace({ isRoot })
  if (isRoot) return

  con.trace_Set(traceLevel)
  const done2 = (err) => {
    if (err !== undefined) { throw err }
  }
  TestAll(done2) // Only run if not executed from the root folder
  con.logGreen('Success!!!')
}
testRunner(0)

// Exports --------------------------
module.exports = { TestAll }
