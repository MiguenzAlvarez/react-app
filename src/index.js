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
