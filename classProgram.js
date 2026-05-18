

class Student{

//instance variables 
name;    // obj1.name
id;

//intialization
constructor(studetnname,studentid){
    this.name=studetnname;
    this.id =studentid;
}

//instance methods
diplayDetails(str){
    console.log(this.name);
    console.log(this.id);
}

}

let obj1 = new Student("Ravi",20);
obj1.diplayDetails("hello");
obj1.name;
obj1.id;

let obj2 = new Student("Ram",32);
obj2.diplayDetails();


let str ="madam"

console.log(str[0].toUpperCase()+str.slice(1))


const numbers=[1,2,3]
let popnumber= numbers.pop();
// console.log(popnumber)
let popnumber1=numbers.slice(0,numbers.length);
popnumber1.unshift(popnumber);
console.log(popnumber1 )
