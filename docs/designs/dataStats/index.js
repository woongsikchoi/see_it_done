'use strict'
console.log('Starting index.js...')
/* ------------------------------------------------------
* index.js
* Purpose: The purpose of this module is to ????
* Date Created: 2019/07/30
* Created by : Perez Lamed van Niekerk
--------------------------------------------------------- */
const _test = require('lamed_test')
const { Ok, notOk, notOk_Then, Equal, notEqual, con, testAND, unZip } = _test // eslint-disable-line
const chalk = require('chalk')
con.useChalk(chalk)
// con.traceSet(0)

/**
 * Returns a random float number between min (inclusive) and max (exclusive)
 */
function randomFloat(min = 1, max = 100) {
  return Math.random() * (max - min) + min;
}
con.unZip(() => randomFloat(5,10))
con.unZip(() => randomFloat(5,10))

/**
* Returns a random integer between min (inclusive) and max (inclusive).
*/
function randomInt(min = 1, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
con.unZip(() => randomInt(1,10))
con.unZip(() => randomInt(1,10))


function randomArray(min = 1, max = 100, total = 20, intValues = true) {
  let result = []
  for (let ii = 0; ii < total; ii++) {
    if (intValues) result.push(randomInt(min, max))
    else result.push(randomFloat(min,max))
  }
  return result
}
unZip(() => randomArray())

function arrayTotals (arr) {
  var max = arr[0]
  var min = arr[0]
  let sum = arr[0]
  // var avg = sum / arr.length
  arr.sort()
  let n = arr.length
  for (var i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
    sum = sum + arr[i]
  }
  let avg = sum / n
  // 0.32std = 25%; 0.675std = 50%; 
  // 1std = 68%; 1.28std = 80%; 2std = 96%
  let std = Math.sqrt(arr.map(x => Math.pow(x-avg,2)).reduce((a,b) => a+b)/n).toFixed(3)
  let med = arr[Math.round(n / 2)]
  let q1 = arr[Math.round(n / 4)]
  let q3 = arr[Math.round(n * 3 / 4)]
  let range = Math.abs(max - min)
  // unq, std1, std3, stdRng = avg-std1 ... avg+std3, q1Rng, q2Rng, q3Rng, q4Rng
  let result = { count: n, avg, std, range, sum, min, q1, med, q3, max }
  return result
}
con.unZip(() => arrayTotals([1, 2, 3, 4, 5]))
unZip(() => arrayTotals(randomArray()))

function statsShow () {
  // Sample set distrubution
  let input = [11, 5, 15, 6, 20, 6, 3]

  let avg = 9.43
  let std = 6.19
  let std1 = (avg - std).toFixed(0)
  let std3 = (avg + std).toFixed(0)
  let sum = 66
  let Med = 6
  let range = 17
  let count = 7
  let min = 3
  let max = 20
  let q1 = 5
  let q3 = 15
  let unq = '100%'
  con.log('')
  con.log(chalk.bold.underline(`Stats: (count:${count})`))
  con.log({ input })
  con.log({ avg, std, std1, std3 })
  con.log({ range, sum, unq })
  con.log({ min, q1, Med, q3, max })
  con.logGreen('  [-------------STD-------------------]')
  con.log('[2' + chalk.white.bgRed(' 3 ') + '4' + chalk.white.bgGreen(' 5 ') + chalk.white.bgBlue(' 6 ') +
    chalk.white.bgGreen(' 7 8 9 10 11 12 13 14 15 ') + '16 17 18 19' + chalk.white.bgRed(' 20 ') + '21]')
  con.logGreen('       ^--M------A-----------------^')
}
statsShow()

function Diagram () {
  for (let ii = 0; ii <= 20; ii++) {
    con.log(ii)
    //
  }
}

// Exports --------------------------
module.exports = {}
