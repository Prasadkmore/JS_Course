
// primitive type
let sname="prasad";

let age=56;

let active=true;

let BigInt=1234554676575675;

let x;

let value=null;

let unique=Symbol('id');

let student='f';

console.log(typeof sname);
console.log(typeof age);
console.log(typeof active);
console.log(typeof BigInt);
console.log(typeof x);
console.log(typeof value);
console.log(typeof unique);
console.log(typeof student);


//non primitive type

let stud={
    s_name:'prasad',
    s_age:23,
    s_gender:'m',
    s_present:true
}
console.log(stud);
console.log("Age of student",stud.s_age);

//Array 
let arr=[11,22,33,44,55];

console.log(arr); 
console.log(arr[1]);

for(let i=0; i<arr.length; i++){

    console.log(arr[i]);
}

//function 

function message(){
    console.log("hi my name is prasad and how are you");
}

// let funcall=message();
// console.log(funcall);

//console.log(message());
 message();