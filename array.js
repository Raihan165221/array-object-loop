// Write programs for-----
// concat()
const firstName = "raihan";
const secondName = "uddin";
const fullName = firstName.concat(" ").concat(secondName);
console.log(fullName);

// every()
const inEvery = (number) => number > 10;
const numbers = [12, 20, 30, 45];
console.log(numbers.every(inEvery));

// fill()
const fillArr = ["raihan", "rofiq", "korim", "sunny"];
console.log(fillArr.fill("akash", 2, 4));

// filter()
const products = [
  { name: "laptop", price: 30000 },
  { name: "laptop", price: 40000 },
  { name: "phone", price: 8000 },
];
const searchLaptop = products.filter((product) => product.name === "laptop");
console.log(searchLaptop);

// find()
const products2 = [
  { name: "laptop", price: 30000 },
  { name: "laptop", price: 40000 },
  { name: "phone", price: 8000 },
];
const searchLaptop2 = products.find((product) => product.name === "laptop");
console.log(searchLaptop2);

// findIndex()
const prices = [22, 32, 20, 6, 14, 25, 20];
const output = prices.findIndex((price) => price === 20);
console.log(output);

// forEach()
const products3 = [
  { name: "laptop", price: 30000 },
  { name: "laptop", price: 40000 },
  { name: "phone", price: 8000 },
];
products3.forEach((product) => console.log(product));
// from()
const myName = "raihan";
console.log(Array.from(myName));

// includes()
const books = ["english", "bangla", "socaial science"];
const includesBook = books.includes("bangla");
console.log(includesBook);

// isArray()
const arr = [];
console.log(Array.isArray(arr));

// join()
const namesArr = ["abul", "babul", "kabul", "nibul"];
console.log(namesArr.join(", "));
// map()
const products4 = [
  { name: "laptop", price: 30000 },
  { name: "laptop", price: 40000 },
  { name: "phone", price: 8000 },
];
const mapProduct = products4.map((product) => product.price * 2);
console.log(mapProduct);

// commmon array
const commonArr = [10, 20, 30, 40, 50];
// pop()
commonArr.pop();
console.log(commonArr);

//  push()
commonArr.push(60);
console.log(commonArr);

//  reverse()
commonArr.reverse();
console.log(commonArr);

//  shift()
commonArr.shift();
console.log(commonArr);

//  slice()
const arrSlice = commonArr.slice(0, 3);
console.log(arrSlice);

//  some()
const isEven = (num) => num % 2 === 0;
console.log(commonArr.some(isEven));

//  sort()
const arrSort = commonArr.sort();
console.log(arrSort);

//  splice()
const arrSplice = commonArr.splice(2, 3);
console.log(arrSplice);

//  unshift()
commonArr.unshift(160);
console.log(commonArr);
// Write a program for concatenation two array (using spread operator).
const names = ["rohim", "korim", "jolil"];
const ages = [20, 34, 24];
const namesAges = [...names, ...ages];
console.log(namesAges);
