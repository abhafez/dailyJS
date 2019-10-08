let cardAce = {
  name: "🂡",
  power: 15
};

let tenSpades = {
  name: "🂪",
  power: 10
};

let cardKing = {
  name: "🃞",
  power: 13
};

let deck = new Map();

deck.set("as", cardAce);
deck.set("ke", cardKing);
deck.set("10s", tenSpades);

for (const key of deck.keys()) {
  console.log("key", key);
}
// key as
// key ke
// key 10s
console.log("========================");
for (const value of deck.values()) {
  console.log("value", value);
}
// value { name: '🂡', power: 15 }
// value { name: '🃞', power: 13 }
// value { name: '🂪', power: 10 }
console.log("========================");
for (const entry of deck.entries()) {
  console.log(`entry`, entry);
  console.log(`type of entry ${typeof entry} isArray ${Array.isArray(entry)}`);
}
// entry [ 'as', { name: '🂡', power: 15 } ]
// type of entry object isArray true
// entry [ 'ke', { name: '🃞', power: 13 } ]
// type of entry object isArray true
// entry [ '10s', { name: '🂪', power: 10 } ]
// type of entry object isArray true
console.log("========================");

deck.forEach(obj => {
  console.log(`${obj.name} &`, obj);
});
// 🂡 & { name: '🂡', power: 15 }
// 🃞 & { name: '🃞', power: 13 }
// 🂪 & { name: '🂪', power: 10 }

console.log("deck.has('as')", deck.has("as")); //deck.has('as') true
console.log("deck.has('sa')", deck.has("sa")); //deck.has('sa') false

let myItem = deck.get("as");
console.log(myItem); // { name: '🂡', power: 15 }
deck.delete("as");

console.log(deck.size); // 2
