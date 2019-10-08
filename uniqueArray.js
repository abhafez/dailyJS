const arr = ["🍭", "🍬", "🍬", "🍬", "🍰", "🍰", "🍫"];

// Set
const uniqueArray1 = [...new Set(arr)];

// filter
const uniqueArray2 = arr.filter((item, index) => arr.indexOf(item) === index);

// reduce
const uniqueArray3 = arr.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);

console.log(uniqueArray3); // [ '🍭', '🍬', '🍰', '🍫' ]
