const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
//  * @param {Number} n
//  * @return {Number}
//  *
//  * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(number) {
//    let numbers = [...number.toString()].map(Number)
//    const min = Math.min(...numbers);
//    console.log(min)
//    const max = numbers.slice(min)

//    console.log(max)

//    return +max.join('')
// }

function deleteDigit(number) {
   let numbers = String(number).split('').map(Number)
   return Math.max(...numbers.map((el, i) => {
      let result = numbers.slice();
      console.log(result)
      result.splice(i, 1);
      return Number(result.join(''))
   }))
}
// console.log(deleteDigit(1001))

module.exports = {
   deleteDigit
};
