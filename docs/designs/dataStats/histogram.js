'use strict'
console.log('Starting histogram.js...')
/* ------------------------------------------------------
* histogram.js
* Purpose: The purpose of this module is to ????
* Date Created: 2019/08/01
* Created by : Perez Lamed van Niekerk
--------------------------------------------------------- */
const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
// con.useChalk(require('chalk'))
// con.traceSet(0)
const _core = require('lamed_core')
const _arrDef = require('lamed_arraydef')
const _random = require('lamed_random')

function dataLine(min, max) {
  con.log('')
  let result = []
  let rng = max - min
  let size = rng.toString().length
  if (size < 2) size = 2
  let index = Math.floor((rng / 20) + 0.9)
  con.log({ index })
  // min -= index 
  let line = '[ '
  for (let ii = 0; ii <= 21; ii++) {
    let value = (min + (ii*index))
    result.push( {value, total: 0} )
    let no = _core.strPad(value, size)
    line += no + ' '
    if (value >= max) break
  }
  line = line+ ']'
  con.log(line)  
  con.log({ result })
}
// dataLine(3,220)

let arr = _random.randomArray()
let arrSorted = new _arrDef.ArrayDef(arr)
let histo = dataLine(arrSorted.getFirst, arrSorted.getLast)


// Exports --------------------------
module.exports = {}

