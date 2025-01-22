import test from "./test.js";

const { data, age } = test;

data.forEach(trav);

function trav(item, index) {
  console.log(`The name is ${data[index]} and the age is ${age[index]}`);
}
