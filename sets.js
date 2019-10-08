let array = [1, 2, 3, 1];
let set = new Set([1, 1, 1]);

for (let item of set) {
  console.log('"item:"', item);
}

set.add(2);
console.log('"set.add(2):"', set.add(2));

for (let item of set) {
  console.log('"item:"', item);
}
