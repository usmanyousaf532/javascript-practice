// methods of object

// assign

// const person1 = {
//   firstName: "john",
//   lastName: "Doe",
//   age: 23,
//   eyecolor: "blue",
// };

// const person2 = {
//   firstName: "Anne",
//   age: 24,
// };

// console.log(Object.assign(person1, person2));

//constructor

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// let text = person.constructor;
// console.log(text);

// create
// const person = {
//   firstName: "john",
//   lastName: "Doe",
// };

// const man = Object.create(person);
// man.firstName = "peter";
// console.log(man.firstName);

//define properties

// Create an Object:
// const person = {
//   firstName: "john",
//   lastName: "doe",
// };

// console.log(
//   Object.defineProperties(person, {
//     language: { value: "eng",
//         enumerable: true,
//      },
//     year: { value: 1898 },
//   }),
// );

// console.log(person)

// delete

// const person = {
//   firstName: "john",
//   lastName: "doe",
// };

// console.log(
//   Object.defineProperties(person, {
//     language: { value: "eng",
//         enumerable: true,
//      },
//     year: { value: 1898 },
//   }),
// );

// console.log(delete person.lastName)

// freezee

// "use strict";
// // Create Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Freeze Object
// console.log(Object.freeze(person));

// This will throw an error
// console.log((person.age = 51));

//getOwnPropertyDescriptor

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Get Properties
// let descriptor = Object.getOwnPropertyDescriptor(person);

// console.log(descriptor)

//isExtensible

// Create Object
// const person = {firstName:"John", lastName:"Doe"};

// // Prevent Extensions
// Object.preventExtensions(person);

// // This will return false
// let answer = Object.isExtensible(person);

// console.log(answer)

//keys()

// Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Get the Keys
// const keys = Object.keys(person);
// console.log(keys)


function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

const fred = new employee("Fred Flintstone", "Caveman", 1970);

console.log(fred, fred.salary);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log(myArray);

const person = {
  name: "Usman",
};

Object.defineProperty(person, "secret", {
  value: "12345",
  enumerable: false,
});

console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));
