
//object is collection of info. with key-value pair
//object declare with {} braces,seprated values by comma

students ={

    name:"prasad",
    age:23,
    college:"Fergusson college pune",
    course:'msc-ca'

}

console.log(students); 

console.log(students.name)

console.log(students["name"]);

//changing values
students.name='manoj';
console.log(students);

//adding two diff. object

stud={
    s_name:'omkar',
    s_age:22,
    
}
college={
    c_name:'fergusson',
    c_code:12345,
}

let towobj={...stud,...college};
console.log(towobj);

//removing obj properties

delete college.c_name;
console.log(college);


//iteration obj
for(let key in stud){
    console.log(stud[key]);
}

//obj length

console.log(stud.length);


