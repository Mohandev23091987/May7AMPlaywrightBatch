
//global variable

// var name="ravi";

// function printString(){
//   console.log(name);
// }

// printString();

// console.log(name);


//function scope 

// function printNubmber(){
//     var x=5;
//     console.log(x);  // 5
// }

// printNubmber()
// console.log(x);


//block



let marks = 75;


if(marks>35){  // 75>35
    var passedBy = marks-35;  //40
    console.log(passedBy);  //40
}else{
     var failedBy = 35-marks;
    console.log(failedBy);
}
console.log(marks);
console.log(passedBy);  // reference with let 

//only with var
//delcarations with intial values  //hoisting 
//it will store real values




// console.log(a); //undefined
// console.log(b);//undefinded 
// console.log(c);//defined 
// var a=10;
// var b=20;
// var c= a+b;

// console.log(a+b);






var a;
console.log(a);//
if(2>1){
     a=20;
}
console.log(a);  // 20



// 20 30 20 30




sayHello(); //function calling

//funcation declaraion 
function sayHello(){
    console.log("hi");
}


//global -let and var -both same
//function scope => same 
//block => difference let and var 










