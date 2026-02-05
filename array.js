//ARRAY SEARCH

//indexOf()

// const fruits = ["Apple", "Orange", "Apple", "Mango", "Orange"];
// let position = fruits.indexOf("Orange") + 1;

// lastIndexOf()

// let position = fruits.lastIndexOf("Orange");

//includes()

// let position = fruits.includes("Apple");

//find()

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// function myFunction(value) {
//   return value > 17;
// }
// console.log(first);

//findIndex()

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);
// function myFunction(value) {
//   return value > 26;
// }
// console.log(first);

// findLast()

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findLast(myFunction);
// function myFunction(value) {
//   return value > 5;
// }
// console.log(first);

//findLastIndex()
// const numbers = [4, 9, 16, 25, 2];
// let first = numbers.findLastIndex(myFunction);
// function myFunction(value) {
//   return value > 5;
// }
// console.log(first);

// ARRAY METHODS

//arrayLength()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.length;
// console.log(res);

// length

// fruits.length = 3;
// console.log(fruits);

// toString()

// const num = [1, 2, 3, 4, 5, 6];
// let res = num.toString();
// console.log(res);

//join()

// let res = fruits.join('*');
// console.log(res);

//pop()

// let res = fruits.pop();
// console.log(res);

//push()

// let res = fruits.push("kiwi");
// console.log(fruits);

// shift

// let res = fruits.shift()
// console.log(res)

//unshift

// let res = fruits.unshift('grapes');
// console.log(fruits);

// fruits[fruits.length] = "Kiwi";
// console.log(fruits);

// console.log(Array.isArray(fruits))

// console.log(delete fruits[0])

//conCat()

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// console.log(arr1.concat(arr2, arr3))

//flatmap()

// const myArr = [1, 2, 3, 4, 5, 6];
// const arr = myArr.flatMap(x=>[x,x*10]);
// console.log(arr)
// splice

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "pineapple", "orange");
// console.log(fruits);

//...operator

// let fruits = ["Apple", "Banana"];
// let moreFruits = ["Mango", "Orange"];

// let allFruits = [...fruits, "Pineapple", ...moreFruits];
// console.log(allFruits);

// map()

// const arr = [5, 1, 3, 2, 6];
// function s (x){
//     return x + 3;
// }

// const arr1 = arr.map(s)
// console.log(arr1);

// const arr = [5, 1, 3, 2, 6];
// // Task 1: Double the array element: [10, 2, 6, 4, 12]
// function double(x) {
//   return x * 2;
// }
// const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.
// console.log(doubleArr); // [10, 2, 6, 4, 12]

// filter

// const arr = [5, 1, 3, 2, 6];
// function isOdd(x) {
//   return x % 2;
// }

// const arrodd = arr.filter(isOdd);
// console.log(arrodd);


// sort

const array = [5, 1, 3, 2, 6];

const res = array.sort();

console.log(res);
