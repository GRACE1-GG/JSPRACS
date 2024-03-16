//ways to declare a variable
//var, let,const

let firstName = `John`;
let lastName =`nermga`;

console.log(firstName, lastName);

var age = 30;

console.log(age);

//ressigning variable
age = 31;

score = 1;

console.log(score);

if(true){
   
    score= score + 1;
}
console.log(score);

const x = 100;//const cannot be directly reassigned,must be initialized

const arr = [1, 2, 3, 4, 5];

arr.push(5);

console.log(arr);

const person = {
    name: `Brad`
};

console.log(person);

person.name = `john`;

person.email =`grad@gmail.com`;

console.log(person);

//declare multiple value at once
let a, b, c;

const d = 10,
e = 20,
f = 30;

console.log(d);
console.log(e);

//DATA TYPES-PRIMITIVE,REFERENCE DTs
//string,integer,boolean,null,undefined,symbol,bigint
//javascript-dynamic,not explicitly defined variables
//statically-typed such as C++,C,Java
//typescript allows static typing ,less error, code more verbose

//string
const thirdName = `Sara`;

const output = thirdName;

console.log(output, typeof output);

//number
const temp = 98.9;

const result = temp;

console.log(result, typeof result);

//boolean
const hasKids = true;

const resul =hasKids;

console.log(resul,typeof resul);

//null
const aptnumber = null;

const outpt = aptnumber;

console.log(outpt, typeof outpt);

//undefined
let teachers;

const outt = teachers;

console.log(outt, typeof outt);

//symbol
const id =Symbol(`id`);

const resut = id;

console.log(resut, typeof resut);