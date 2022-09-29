/*LET, VAR , CONST:
//let -> only accessible in the block (use only when you need to reassign a variable)
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();

//var -> in the function 
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();

//const -> only accessible in the block (cant be changed)
const x = 1;*/

/*OBJECTS:

const person = {
    name: 'Mosh',
    walk() {}, //function inside of an object is called method
    talk() {}
};
person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'Lu';*/

/*ARROW FUNTIONS:
//original
const square = function (number) {
  return number * number;
};
console.log(square(5));

//arrow function
const square1 = (number) => number * number;
console.log(square1(5));

//
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

//original
const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});
const activeJobs1 = jobs.filter((job) => job.isActive);*/

/*ARRAY.MAP METHOD:*/
const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);
