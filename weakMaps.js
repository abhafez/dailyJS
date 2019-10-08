let a = { a: 1 };
let b = { a: 2 };

let myWeakMap = new WeakMap();

myWeakMap.set(a, { c: 2 });
myWeakMap.set(b, 27);

console.log(myWeakMap.get(a)); // { c: 2 }

let gettingItemB = myWeakMap.get(b);

console.log(gettingItemB); // 27
