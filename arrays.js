

let arr=[1,2,3];  // [1,2,3,10]


//mutates methods => original will get changed 
//iterate methods
//search 
//new array creation methods => original array won't get changed 

//Mutates 

//Push => it adds element or elements to the end of the arrray

//array.push(element1,element2.......)

let arr=[1,2,3];
arr.push(10);
console.log(arr);

arr.push(100,200);
console.log(arr);

//pop() - Remove last element at end of the array and retruns that element

let arr2 =[3,5,7,8,10]
console.log(arr.pop());  //10  // it will change original array to [3,5,7,8]
console.log(arr);


//shift => removes first element from array and retruns it

let arr3 =[1,2,3,4,5,6];
console.log(arr3.shift());  // 1
console.log(arr3);

//unshit => add element or elements at startig of an array 

let arr4 =[1,2,3,4,5,6];
arr4.unshift(7,8,9,10);
console.log(arr4);


console.log(arr4.length);


//splice => add, remove ,replace of elements in an array

//array.splice(startindex,deletecount,addelement1,addelemet2...)


let numarr = [1,2,3,4,5]; //[1,4,5]
numarr.splice(1,2);
console.log(numarr)

let numarr2 = [1,2,3,4,5]; //[1,100,4,5]
numarr2.splice(1,2,100);
console.log(numarr2)  // //[1,100,4,5]

numarr2.splice(3,1,500);
console.log(numarr2)   

//[1,2,3,4,5].splice(1,3)  => 


//sort

//  ()=>{}
// (a,b)=>a-b

let arr10 = [3,7,20,2,1,200];
arr10.sort((m,n)=>m-n); 


// ascending - (a,b)=>a-b
// descending - (a,b)=>b-a

console.log(arr10)


// apple 
// anjeer
let fruits = ["banana","kiwi","cherry","apple","mango"]
fruits.sort();
console.log(fruits)

//reverse
let arr11 = [5,8,100,500];  
arr11.reverse()
console.log(arr11)

console.log("madam".split("").reverse().join("")==="madam")


//iterates
for(let num of arr11){
    console.log(num)
}

let arr12=[1,2,3];
arr12.forEach(num=>{console.log(num)});


//array.forEach(element,index,array)


//map  
let arr13 = [1,2,3,4,5,6]

//  (n)={ 
// n = n+1;return 
// n}

let changedarr =arr13.map(n=>n*2);

console.log(changedarr);


//filter 
let arr14 = [1,2,3,4,5,6]

let oddnums = arr14.filter(n=>n%2===1)
console.log(oddnums);
//reduce =>single output


//reduce 

//search methods

// syntax 
//

//


let str = "Ravi";

console.log("Ravi is good boy".indexOf("i",8))
console.log("Ravi is good boy".indexOf("i"))

//reduce =>it will reduce your array into single output

//[1,2,3,4]    sum=0  sum=sum+n
//array.reduce((accumulator,element)=>{logic to reduce it to onevalue},initalvalue);

let numbers =[2,4,6,8];
let sumofNumbers = numbers.reduce((sum,element)=>sum+element,10);
console.log(sumofNumbers);

// let numbers =[2,4,6,8];
// let sumofNumbers = numbers.reduce((sum,element)=>sum*element,0);
// console.log(sumofNumbers);

//Search 
//find it will return first element which matches your condition

let numb123 = [3,5,7,1,2,3,4];

console.log(numb123.find((n)=>n%2===0));
console.log(numb123.findIndex((n)=>n%2===0));


console.log(numb123.findLast((n)=>n%2===0));
console.log(numb123.findLastIndex((n)=>n%2===0));


//boolean 
//array.includes(element,fromindex)

let numb1234 = [3,5,7,1,2,3,4];

console.log(numb1234.includes(1))
console.log(numb1234.includes(1,5))

//every - checks if all your elements pass a condition 
//true 
//false 
let numb12345 = [3,5,7,1,2,3,4,0];
console.log(numb12345.every(n=>n>0))

let numb123456 = [-1,0];
console.log(numb123456.some(n=>n>0))

//isArray 

Array.isArray([1,2,3,4]);
Array.isArray("Ravi");

// combining two arrays returning new arrays

//concat - merges two or more arrays 

//array.contact(arr1,arr2,.......)

let array1 = [1,2,3];
let array2 = [4,5];

let result =array1.concat(array2);

console.log(result)


// join - join all your array elements into string with separator 

let array10=[1,2,3,4];
console.log(array10.join("-"))
console.log(array10.join(""))


let strarray =["mango","orange"];

console.log(strarray.join(","))

//toString  = join(",")

let array11=[1,2,3,4];
console.log(array11.toString())


//Array.of

let arraryofNumbers =Array.of(1,2,3)    //[1,2,3]
console.log(arraryofNumbers)













