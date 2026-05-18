//funtions with retrun type 
//funtions without retrun type 
//funtions without parameters
//funtions with parameters


// function expression 
//you can store your function into a variable

let printHello =function (){
 console.log("Hello this is first program of Function expression");
}

printHello();


const FEwithParameters =function (str){
 console.log(str);
}

FEwithParameters("Rama"); 


const addingTwoNums = function (num1,num2){ // 5
    return num1+num2;
}

console.log(addingTwoNums(2,4));


//Array functions

const arrowprintHello = ()=>{
    console.log("Hello this is first program of Function expression");
};

arrowprintHello();


// which take two parameters and calculates sum of it and it will return

 // array function without return type 
 let sumofNumbers =(x,y)=>{
    console.log(x+y);
 }

 sumofNumbers(2,3);

 // array function with return type 
  let sumofNumbersReturn =(x,y)=>{
    return (x+y);
 }

 let  result = sumofNumbersReturn(2,3);

console.log(result);



let sayHello =(str) => {console.log("Hello "+ str)};

sayHello("QA Masters");


let sayHelloShortHand =str => console.log("Hello "+ str);

  let sumofNumbersReturnShortHand =(x,y)=>(x+y);
  let productofNumbersReturnShortHand =(x,y)=>(x*y);

  // arrow functiosn and short hand arrows functions


  //anonymous function
  //function can be stored 
  //function can be passed as a parameter also to another function

console.log("ravi")  // ravi
setTimeout(function(){console.log("this is executed after 3 seconds")},10000);//
console.log("Ramu") // ramu 

// line1// sync
// line2 //Async
// line3 // sync


// ramu  ravi this is executed after 3 seconds

// IIFE (Immediately invoked function experssion)


(function(){
 console.log("this is IIFE");
})();


(()=>console.log("testing"))();

//callback functions
// A function is passed as parameter to anoter function , and that passed funciton can be executed later 

function greet(name,x){  
    console.log("hello "+ name);
    x();
}


function sayBye(){
    console.log("Good bye");
}

greet("QA Masters",sayBye);  // functin calling


//sync
//Aync

// 50%

//string
//Array
//map 
//set




let agecheck =(age)=>{
    if(age>18){
    console.log("eligible")
    }
}

agecheck(25);


//  ??


// leftside??rightside;

// if leftside is null, undefined => it will return rightside value
// if leftside is not null, undefined => left side value


let name1="Ravi";

console.log(name1 ?? "Guest");




let age=25;
 let gender="male";
 let gender1="female";
 let hasID="true";
 console.log(age>18 && gender=="male");
 console.log(age<20 || hasID);
 console.log(age>18 || hasID);
 console.log((age>18 && gender1 =="female") );
console.log(age>18  || !hasID =="true");


//normal 
//function experssion 
//anynomous 
//IIFE
//Arrow functions, short arrow
// call back



//sync and Async

let numbers = [1,2,3];

numbers.forEach(
num => console.log(num*10)
);


let flag = true;

console.log(!!flag);

// import 
//export 














  


 














