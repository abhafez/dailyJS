// Standard built-in objects
// Map
// Properties
// Map.prototype
// Map.prototype[@@toStringTag]
// get Map[@@species]
// Methods
// Map.prototype[@@iterator]()
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
console.log("========================");
for (const value of deck.values()) {
  console.log("value", value);
}
console.log("========================");
for (const entry of deck.entries()) {
  console.log(`entry`, entry);
  console.log(`type of entry ${typeof entry} isArray ${Array.isArray(entry)}`);
}
console.log("========================");

deck.forEach(obj => {
  console.log(`${obj.name} &`, obj);
});

console.log("deck.has('as')", deck.has("as"));
console.log("deck.has('sa')", deck.has("sa"));

let myItem = deck.get("as");
console.log(myItem);
deck.delete("as");

console.log(deck.size);
