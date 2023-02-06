const hobbies = ['coooking', 'playing']

for(let hobby in hobbies) {
    console.log(hobby)
}

const copiedHobby = [...hobbies];
console.log(copiedHobby)

const person = {
    name: 'Abhishek',
    age: 23,
    greet: ()=>{
        console.log('Hi');
    }
}

const printPersonData = ({name, age})=>{
    console.log(name, age)
};

printPersonData(person);


let multiply = function (x, y) {
    console.log(x * y);


}

// Cyrrying
let mulyiplyByTwo = multiply.bind(this, 2);
mulyiplyByTwo(3);

let multiplyByClosure = function(x) {
    return function (y) {
        console.log(x*y)
    }
}

function Addition(a,b,c){
    return a + b + c 
}

let res = Addition(1,2,3)
console.log(res);

function AddClosure(a){
    return function(b){
        return function(c){
            return a + b + c;        
        }
    }
}

