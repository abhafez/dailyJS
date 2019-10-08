let a = { a: 1 };
let b = { a: 2 };

let myWeakMap = new WeakMap();

myWeakMap.set(a, { c: 2 });
myWeakMap.set(b, 27);

console.log(myWeakMap.get(a));

a = myWeakMap.get(a);

console.log(myWeakMap.get(a));

console.log(a);
