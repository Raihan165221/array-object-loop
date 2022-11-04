// Write programs for entries(), hasOwn(), keys(), values() methods.

// declare a object
const myObj = {
  name: "raihan",
  age: 22,
};
// entries()
for (const [key, value] of Object.entries(myObj)) {
  console.log(`${key} ${value}`);
}
// hasOwn()
console.log(Object.hasOwn(myObj, "name"));
// keys()
console.log(Object.keys(myObj));
// values()
console.log(Object.values(myObj));

// Write a program for merging two object (using spread operator).
const a = { x: 20 };
const b = { y: 30 };
const c = {
  ...a,
  ...b,
};
console.log(c);
