//string => collection/sequence of characters

let str ="Rama";  //

//ways to create String

//using double quotes 
let course="Playwright";

//using single quotes 
let name='Ravi';


//using backtick quotes => template literals 
let address= `India`;
//you can string drectly ${variable}

console.log(`name:${name} address:${address}`);
console.log("name:"+name+ " "+ "address :"+ address );


let personDetails=`
Person details:
name    : ${name}
address : ${address}
`;
console.log(personDetails);

let a ='Ramam';
let b='R';


//Strings are immutable => cannot be changed 

let word= 'Hello';
word[0] = 'K'
console.log(word);

// concatination
word = 'K'+"ello";

console.log(`changed string is ${word}`)


let word2 ="Kello";

let str1="Rama";
let str2 ="rama";

console.log(str1==str2);
console.log(typeof str1)

let str3 = new String("Rama");
console.log(str3);

console.log(str1==str3);  


// perdefined methods to operate on strings

let str10 = "Devansh";
let str11 = "Devansh";


console.log("Bhargavi".indexOf('g'));








