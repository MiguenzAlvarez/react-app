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

/*ARRAY.MAP METHOD:x
const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);*/

/*OBJECT DESTRUCTURING:
//
const adress = {
  street: "",
  city: "",
  country: "",
};

//original
const street1 = adress.street;
const city1 = adress.city;
const country1 = adress.country;

//object destructuring
const { street, city, country } = adress;
const { street: st } = adress; //we can use an alias*/

/*SPREAD OPERATOR:
const first = [1, 2, 3];
const second = [4, 5, 6];

//original
const combined1 = first.concat(second);

//sread operator
const combined = [...first, ...second];
const combined2 = [...first, "a", ...second, "b"]; //we can add more

//clone
const clone = [...first];*/

/*CLASSES:
class Person {
  constructor(name) {
    this.name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("Lu");*/

/*INHERITANCE:*/
class Person {
  constructor(name) {
    this.name;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name); //call the father constructor
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Lu", "MSc");
