console.log('Starting parseComment.js...')
// ------------------------------------------------------
// parseComment.js
// Purpose: The purpose of this....
// Date Created: 2019/06/11
// Created by : Perez Lamed van Niekerk
// ------------------------------------------------------

/* eslint-disable */
const _test = require('lamed_test')
const { notEqual, Equal, Ok, notOk, _log, _logT, _logLine, _logGreen, _logBold, _logRed,
  _ifTrace, _Trace_Set, _Trace_Get,
  _Trace, _TraceLine, _TraceGreen, _TraceBold, _Trace_Table, _Trace_Heading, testAND } = _test
/* eslint-enable */
// _Trace_Set(0)

const done = ''

/**
 * Parse comment into object
 * @param {string} comment - the comment
 */
function parseComment (comment) {

}

/**
 * Parse function header into object
 * @param {string} header - the function header
 */
function parsefHeader (header) {

}

/**
 * Convert function header and comment into markdown document
 * @param {string} header - the header of the function
 * @param {string} comment - the comment of the function
 */
function function2doc (header, comment) {

}

function parseCommentTest1 (done) {
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let input1 =
  '/**\n' +
  '* Returns the Node version { major, minor, patch }\n' +
  '*/'

  let output1 = {
    'description': 'Returns the Node version { major, minor, patch }',
    'params': {},
    'return': {}
  }

  // -----------------------------------------------
  if (notEqual(parseComment(input1), output1)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}

function parseCommentTest2 (done) {
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let input2 =
  '/**\n' +
  '* Return true if the specified trace level is active\n' +
  '* @param {int} traceLevel - the verbosity trace level; -1 = off; 0 = basic; 1 = detail\n' +
  '*/'

  let output2 = {
    'description': 'Return true if the specified trace level is active',
    'params': {
      'traceLevel': { 'type': 'int', 'description': 'the verbosity trace level; -1 = off; 0 = basic; 1 = detail' },
      'return': {}
    }
  }

  // -----------------------------------------------
  if (notEqual(parseComment(input2), output2)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}

function parseCommentTest3 (done) {
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let input3 =
  '/**\n' +
  '* Compare huge strings\n' +
  '* @param result - The expected result\n' +
  '* @param stringValue - The string value to compare against\n' +
  '* @param trace - The trace level\n' +
  '* @param trim - If true -> trim the line before compare. Default is true\n' +
  '* @param lineBr - The line break character. Default is \\n\n' +
  '* @returns {boolean} - True if the items and the comare values are the same\n' +
  '*/'

  let output3 = {
    'description': '',
    'params': {
      'result': { 'type': 'string', 'description': 'The expected result' },
      'stringValue': { 'type': 'string', 'description': 'The string value to compare against' },
      'trace': { 'type': 'string', 'description': 'The trace level' },
      'lineBr': { 'type': 'string', 'description': 'The line break character. Default is \\n' }
    },
    'returns': {}
  }

  // -----------------------------------------------
  if (notEqual(parseComment(input3), output3)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}

function parsefHeaderTest1 () {
  // Test of parsefHeader()
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let input1 = 'function Node_Version ()'

  let output1 =
  ''
  // -----------------------------------------------
  if (notEqual(parsefHeader(input1), output1)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}

function parsefHeaderTest2 () {
  // Test of parsefHeader()
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let input2 = 'const _ifTrace = (traceLevel)'

  let output2 =
  ''
  // -----------------------------------------------
  if (notEqual(parsefHeader(input2), output2)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}

function parsefHeaderTest3 () {
  // Test of parsefHeader()
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let input3 = "function Compare (result, stringValue, trim = false, lineBr = '\\n')"

  let output3 =
  ''
  // -----------------------------------------------
  if (notEqual(parsefHeader(input3), output3)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}

function function2docTest1 (done) {
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let header1 =
  ''

  let comment1 =
  ''

  let output1 =
  ''
  // -----------------------------------------------
  if (notEqual(function2doc(header1, comment1), output1)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}
function function2docTest2 (done) {
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let header2 =
  ''

  let comment2 =
  ''

  let output2 =
  ''
  // -----------------------------------------------
  if (notEqual(function2doc(header2, comment2), output2)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}
function function2docTest3 (done) {
  _TraceLine()
  _Trace(module.filename)
  _TraceBold(`--------------------------> ${arguments.callee.name}()`) // eslint-disable-line
  let error = `In ${module.filename} --> ${arguments.callee.name}()\n` // eslint-disable-line

  let header3 =
  ''

  let comment3 =
  ''

  let output3 =
  ''
  // -----------------------------------------------
  if (notEqual(function2doc(header3, comment3), output3)) return done(new Error(error))
  // -----------------------------------------------

  return true // success
}

parseCommentTest1()
parseCommentTest2()
parseCommentTest3()

parsefHeaderTest1()
parsefHeaderTest2()
parsefHeaderTest3()

function2docTest1(done)
function2docTest2(done)
function2docTest3(done)
