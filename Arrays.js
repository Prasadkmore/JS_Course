//Array is collection of similar data types
//Arrays fix size
//arrays always starting index with zero(o)

let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[3]);

//iteration
for(let array_values of arr){
    console.log(array_values);
}

//methods

let arr2=[12,54,6,324,0];

console.log(arr2[2]);
console.log(arr2.length); //length is variable in arrays or string

let arr3=arr2.concat(arr);
console.log(arr3);

let newarr=arr2.push(2); //add element ending array
console.log(newarr);
for(let newarr2 of arr2){
    console.log(newarr2);
}
console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
arr2.pop();                //remove element ending array

for(let newarr3 of arr3 ){
    console.log(arr3[newarr3]);
}


console.log(arr2.shift()) //remove starting element
console.log(arr2.unshift()); //add starting element

console.log(arr2.slice(1,2));//provide piece of array

console.log("old array:",arr2);
console.log(arr2.splice(1,2,33));// splice(start,end,newadd); ===.start and end deleting and add element
console.log("new array:",arr2);

console.log("old array:",arr);
console.log(arr.splice(1,0,3000000)); //splice(index,0,newadd) ==add element index
console.log("new array:",arr);
