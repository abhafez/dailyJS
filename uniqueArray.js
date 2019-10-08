const arr = ["🍭", "🍬", "🍬", "🍬", "🍰", "🍰", "🍫"];

/**
 * @description Get a unique array copy out of your array using Set data structure
 * @name uniqueArray
 * @param {Array} arr
 * @returns {Array}
 */
function uniqueArray(arr) {
  return [...new Set(arr)];
}

/**
 * @description Get a unique array copy out of your array using filter technique.
 * @name uniqueArray2
 * @param {Array} arr
 * @returns {Array}
 */
function uniqueArray2(arr) {
  return arr.filter((el, i) => arr.indexOf(el) === i);
}

/**
 * @description Get a unique array copy out of your array using filter technique.
 * @name uniqueArray3
 * @param {Array} arr
 * @returns {Array}
 */
function uniqueArray3(arr) {
  return arr.reduce((uni, el) => (uni.includes(el) ? uni : [...uni, el]), []);
}

let myArr = uniqueArray(arr);
console.log(myArr); // [ '🍭', '🍬', '🍰', '🍫' ]
