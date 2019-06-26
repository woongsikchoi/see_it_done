console.log('Starting test.runner.js...')
/* jshint esversion: 6 */
// ------------------------------------------------------

const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND } = _test // eslint-disable-line
// con.traceSet(0)


const _run = require('./index.test')

describe('index.js', () => {
  it('About()', (done) => {
    if (_run.TestAll(done)) done()
  })
})

// Exports --------------------------
module.exports = {}
