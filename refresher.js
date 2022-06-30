// const fs = require('fs');

// fs.writeFileSync('hello.txt','Hello from Node JS');

const person = {
    name:'Abhishek',
    age:21

}

const printName = ({name}) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = [ 'sports', 'cooking'];
const[hbyy1, hbyy2] = hobbies;
console.log(hbyy1, hbyy2);