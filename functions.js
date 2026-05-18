
function printString(str){
 console.log(str);
}

printString("Rama"); //calling a function


// printString("thsi is program ");

// printString("thsi is program2 ");


// userdefined functions
function add(num1,num2){ // 5
    return num1+num2;
}

//typescript

//store value
let result =add(2,3);  //5
console.log(result);


console.log(10+add(2,3)); // 15









// part of any statement 

console.log("Result: "+ add(2,3)); // Result : 5


//wide varities functions



let student ={
    name:"Rama",
    age:25,
    course:"automation"
}

// get properties count  => for in 

for(let key in student){  //name   Rama
  console.log(key + "= "+student[key] )
}


//for of => arrays string
// for in => objects  {} 







