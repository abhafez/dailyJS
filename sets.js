const set = new Set([1, 1, 1]);

for (const item of set) {
  console.log('"item:"', item);
}
// "item:" 1

set.add(2);
console.log('"set.add(2):"', set.add(2)); // "set.add(2):" Set { 1, 2 }
for (const item of set) {
  console.log('"item:"', item);
}
// "item:" 1
// "item:" 2
