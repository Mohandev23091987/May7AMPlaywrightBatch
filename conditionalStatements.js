// console.log("this is first line");
// console.log("this is 2 line");
// console.log("this is 3 line");

// let age =20;
// console.log("eligible for voting");
// console.log("not eligible for voting");

//if
//if else
//if else if
//switch 
//ternary operator (if else)


//if
// let age =10;

// if(age>18){  // 10>18  => false
//  console.log("eligible for voting");
// }

// console.log("this is completed");

// if else

let age =10;

if(age>18){  // 10>18  => false
 console.log("eligible for voting");
}else
{
console.log("not eligible for voting");
}

console.log("this is completed");

//if else if

let marks = 20;

if(marks>=90){
console.log("A+");
}
else if(marks >=75){   // 85>=75
  console.log("A");  
}else if(marks >=60){
  console.log("B");  
}else if(marks >=35){
  console.log("C");  
}else {
console.log("failed");  
}


// ternary operator => short form of if else 

// condition?truevalue:falsevalue

// if(age>18){  // 10>18  => false
//  console.log("eligible for voting");
// }else
// {
// console.log("not eligible for voting");
// }

age =30;
let result = age>18?"eligible":"not eligible";
console.log(result);

//switch 

let day=1;
switch(day){ //1
    case 1:  //1===1
    console.log("Monday");
    console.log("this is first case");
    break;

    case 2: // 3===2
    console.log("Tuesday");
    console.log("this is second case");
    break;

    case 3: // 3===3
    console.log("Wednesday");
    console.log("this is three case");
    break;

    default:
    console.log("passed wrong input correct it");

}

// nov dec jan => winter
//feb mar, apri may => summer 
//june july aug sep => rainy season

//for in objects
//for of arrays string set map

// if(9){  // true // not programming  // truthy and falsy values 

// }

//for 
//while
//do while 

// 10 9 8...1 

for(let x=10;x>=1;x--){
    console.log(x);
}


//str="this is playwright class"    // for of => arrays,strings, map,set 

//print only vowels

let str2 = "this is playwright class";

for(let char of str2){
    

    if(char == 'a'||char == 'e'||char == 'i'||char == 'o'||char == 'u' ){
        console.log(char);
    }

}

console.log("Finding vowels count and consonants count")
let str3 = "rama";
let vowelcount =0; // 2
let consonants =0; //2

for(let char of str3){

    if(char == 'a'||char == 'e'||char == 'i'||char == 'o'||char == 'u' ){
        vowelcount++;
    }else 
    {
      consonants++;  
    }

}

console.log("vowelcount = "+ vowelcount);
console.log("consonants = "+ consonants);


console.log("Finding vowels count and consonants count by using string functions")
let str4 = "RamLaxman";
let vowels='aeiouAEOIU';
let vowecount2=0;//1
let consonantcount2=0; // 1
for(let char of str4){
    //perdefined
    if(vowels.includes(char)){   // 'aeiouAEOIU'.includes('a') //ture
        vowecount2++;
    }else
    {
        consonantcount2++;
    }
}


console.log("vowelcount = "+ vowecount2);
console.log("consonants = "+ consonantcount2);


// sum of first 5 number 

let sumofFirst5Numbers =0; // 2

for(let i=1;i<=5;i++){   // 1
    sumofFirst5Numbers = sumofFirst5Numbers + i; 
}

let student ={
    name:"Rama",
    age:25,
    course:"automation"
}

// get properties count  => for in 
let propertiesCount =0;
for(let propertyName in student){  //name       //student[name] => Rama
  propertiesCount++;
  console.log(propertyName + "= "+student[propertyName] )
}

console.log("propertiesCount ="+propertiesCount);

if(true){
    console.log("propertiesCount ="+propertiesCount);
}


function mainfucntion1(x){
 console.log("this is main fuction");


x();
 
}

function print(){
    console.log("this is callback fuction")
}


mainfucntion1(print);






