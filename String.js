
//string is inmutable character
let str=' prasad ';
console.log(str);

let str2="prasad";
console.log(str2);

//string iteration
for(let str_name of str2){

    console.log(str_name);
}

//methods

console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(2));

let concate_String=str+str2;
console.log(concate_String);

console.log(str.substring(1,5)); //give me starting char but not provide end char

console.log(str.replace('a','@'));//replace only one char
console.log(str.replaceAll('a','@')); //replace all available same char

console.log(str.slice(2,4));
console.log(str.length);
console.log(str.trim()); //remove whitespace start and end string
console.log(str.search('a'));//serchchar
console.log(str.startsWith('p',0));
console.log(str.valueOf());//return string


//examples

//Q1.remove white spaces into string
let product=' Laptop ';
console.log(product.trim());

//Q2.check char present orn not in string
let fruits='apple';
let target='e';

for(let String_fruits of fruits){
    if(String_fruits==target){
        console.log(true);
    }
}
//console.log(false);

//Q3.string reverse

let red='apple';

for(let i=red.length-1; i>=0; i--){
    console.log(red.charAt(i));
}

