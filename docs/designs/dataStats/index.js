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

const _core = require('lamed_core')

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

function arrayTotals (arr, fixed = 0) {
  var max = arr[0]
  var min = arr[0]
  let sum = arr[0]
  let rms = arr[0] * arr[0]
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
    rms = rms + (arr[i] * arr[i])
  }
  let avg = (sum / n).toFixed(fixed)
  rms = Math.sqrt(rms / (n+1)).toFixed(fixed)
  // 0.32std = 25%; 0.675std = 50%; 
  // 1std = 68%; 1.28std = 80%; 2std = 96%
  let std = Math.sqrt(arr.map(x => Math.pow(x-avg,2)).reduce((a,b) => a+b)/n).toFixed(fixed)
  let med = arr[Math.round(n / 2)]
  let q1 = arr[Math.round(n / 4)]
  let q3 = arr[Math.round(n * 3 / 4)]
  let range = Math.abs(max - min)
  // unq, std1, std3, stdRng = avg-std1 ... avg+std3, q1Rng, q2Rng, q3Rng, q4Rng
  // rms https://en.wikipedia.org/wiki/Root_mean_square (cos / sin wave average)
  // Learning https://www.coursera.org/courses?query=statistics&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5BrefinementList%5D%5Blanguage%5D%5B0%5D=English&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5BrefinementList%5D%5Bskills%5D%5B0%5D=Statistics&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5BrefinementList%5D%5BproductDifficultyLevel%5D%5B0%5D=Beginner&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5Bpage%5D=1&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5Bconfigure%5D%5BclickAnalytics%5D=true&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5Bconfigure%5D%5BhitsPerPage%5D=10&configure%5BclickAnalytics%5D=true

  let result = { count: n, avg, rms, std, range, sum, min, line: { q1, med, q3, max } }
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
  let unq = '86%'
  con.log('')
  con.log(chalk.bold.underline(`Stats: (count:${count})`))
  con.log({ input })
  con.log({ avg, std, std1, std3 })
  con.log({ range, sum, unq })
  con.log({ min, q1, Med, q3, max })
  con.log('')
  con.log('            █')
  con.log('   █     █  █              █           █              █')
  con.log('[ '+chalk.white.bgRed('03 ') + '04 ' + chalk.white.bgGreen('05 ') + chalk.white.bgBlue('06 ') +
    chalk.white.bgGreen('07 08 09 10 11 12 13 14 15 ') + '16 17 18 19' + chalk.white.bgRed(' 20 ') + ']')
  con.logGreen('         ^--M--------A-----------------^')
  con.logGreen('  [-----------------STD-------------------]')
}
statsShow()

function Diagram () {
  for (let ii = 0; ii <= 20; ii++) {
    con.log(ii)
    //
  }
}

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
    result.push(value)
    let no = _core.strPad(value, size)
    line += no + ' '
    if (value >= max) break
  }
  line = line+ ']'
  con.log(line)  
  con.log({ result })
}
dataLine(3,20)

// Exports --------------------------
module.exports = {}
