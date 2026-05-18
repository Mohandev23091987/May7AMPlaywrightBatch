


let str ="    Rama is learning palywright     ";

console.log(str.toUpperCase()); 

console.log(str.toLowerCase());  

console.log("      Ra ma       ".trim());
console.log("      Rama       ".trimStart());
console.log("      Rama       ".trimEnd());

//includes
// true if text is present
// false if text is not present
console.log("Rama is good".includes("was")); //

console.log("https://google.com".startsWith("cht")); //true 

//endsWith

//indexOf
//string is collection of character 
// Playwright

console.log("madam".indexOf("a"));  // 1



//two strings    second is presnt in firststring
let actualstring ="madam";
let strrev =actualstring.split("").reverse().join("");
console.log(actualstring===strrev);



//endswith 

let file= "import.pdf";

console.log(file.endsWith(".pdf")); //true

console.log(file.endsWith(".xlsx"));//false

//charAt  opposit of indexof


console.log("Testing".charAt(0)); //T

console.log("Testing".charAt(5)); //n

console.log("Testing".charAt(20)); 

console.log("I am Ravi".includes("R",7));

//slice
"Testing Playwright".slice(1,4);

console.log("Testing Playwright".slice(1,4));  // start(inclusive) , end(exlcusive) 

let s = "abcdef";
console.log(s.slice(1,4));


console.log(s.slice(-4));   //(-1,-4)


//substring 

let str2 = "Automation";
console.log(str2.substring(0,4));  //Auto

//replace // first occurance


let message="I am Ravi Ravi";
let replacestr = message.replace("Ravi","Ram");  // searchstring,replace
console.log(replacestr);

//replaceAll

console.log(message.replaceAll("Ravi","Ram"));


//split //delimeter

//rama,ravi,raja   split(",") => [rama,ravi,raja]


let arrayofStrings ="This is playwright".split(" ")  //["This","is","playwrigt"]

console.log(arrayofStrings);

console.log("palywright".length)

console.log("This is playwright".split("i")); // ["Th","s ","s playwr","ght"]

console.log("This is playwright".split("z")); // ["This is playwright"]

console.log("playwright".split(""));


//split , replace, replaceALL
//slice, substring 

//repeat


//mxPlayer 
//MXPLAYYER
//MxPlayer


console.log("~".repeat(20));
console.log("Ravi")
console.log("~".repeat(20));

let actualString = "   MXPLAYER   ";  // "MXPLAYER";
let expected="MxPlayer";

if(actualString.trim().toUpperCase === expected.toUpperCase){
  console.log("page loaded ")
}

console.log("Ravi"+"Raja");

console.log("Ravi".concat(" ","Raja"," Ramesh"));


console.log("Raja Ravi Ramesh".split("R").length-1);

//["","aja ","avi ","amesh"]

//join is opposite to split

console.log(['R','a','v','i'].join());

"Ravi".split("").join("");

//['R','a','v','i']  => Ravi


console.log("Ravi".split("").join(""))


console.log("file.pdf".substring(-3));
console.log("file.pdf".slice(-3));

console.log("file.pdf".substring(1,4));  //ile
console.log("file.pdf".slice(1,4)); // //ile

console.log("file.pdf".substring(4,1)); // 1,4
console.log("file.pdf".slice(4,1));


console.log('abcdef'.slice(-3,-1))

let rev ="";  //maR
let str10 ="madam";
for(let chr of str10){
  rev = chr +rev;   //  a+maR
}


if(rev===str10)
  console.log(`${str10} is a palindrome`)
else 
  console.log(`${str10} is not a palindrome`)





//substring  => 
//it won't negatives


//slice 





//array and objects

//sync
//async
//promise
//asyn and await
//

let rev1="";
for(let chr of "Ravi"){
  rev1 = chr +rev1;   //  a+maR
}

console.log(rev1);


let gettingIndexOf = "Kiran".indexOf("r");

console.log("Kiran".substring(gettingIndexOf));

console.log("Kiran".slice(-3));


console.log("Ref123456".slice(3));


let str = " biryani";

if(str.trim().toLowerCase()==="biryani"){
  console.log("order biryani")
}
// 3digits 


console.log("3".padStart(3,"0"));


//webpage => trim


//substrig
//slice 

console.log("lisa".slice(1,3));  

//1 include
//3  exlcude

console.log("lisa".slice(-2));
console.log("lisa".substring(-2));



console.log("lisa".slice(1));

;  // is 








