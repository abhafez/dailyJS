const a = { a: 1 };
const b = { a: 2 };

const myWeakMap = new WeakMap();

myWeakMap.set(a, { c: 2 });
myWeakMap.set(b, 27);

console.log(myWeakMap.get(a)); // { c: 2 }

const gettingItemB = myWeakMap.get(b);

console.log(gettingItemB); // 27
