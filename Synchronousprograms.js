


//if the tasks are indepent always go with Asynchronous 
//if tasks are dependent with each other then only go with a Synchrounous -


//predefinded async methods 
//web api methods => settimeout, setinterval,cleartimeoutetc
//promises 
//aysnc/await
//api calls
//event listners 






//synchronous execution
console.log("1") //blocked if this is taking more time 
console.log("2")
console.log("3")

//Aynchronous execution  settimeout part of WEB APi methods
setTimeout(()=>{console.log("1")},3000)   //=> background
console.log("2")
console.log("3")





function fun1(){
    console.log("1 function")
}
function fun2(str){
    console.log("2 function")
    console.log(str)
}

function printing(str){
    console.log(str)
}

function fun3(){
    console.log("3 function")
}

fun1();
setTimeout(()=>{fun2("hello")},2000);
fun3();
 



fun1();
setTimeout(fun2,2000);     // it will execute at back 
setTimeout(fun3,2000);

 console.log("")





//Asynchronous

//order
//wait until food comes 
//then do my work

//javascript is single threaded 

//Async 

//callbacks //outdated
//promises 
//Async and await 


//Async

setTimeout(()=>{console.log("connecting to DB")},1000) 
setTimeout(()=>{console.log("fetching the records")},10000) 
setTimeout(()=>{console.log("filtering the records")},2000) 
setTimeout(()=>{console.log("update the recrods")},2000) 
setTimeout(()=>{console.log("close connection")},1000) 


// callbacks 
//promises 
//aysn and await





function Delaytime(){

    const start = Date.now();
    while(Date.now() -start <10000){
        console.log("delay fucntion")
    }
}

setTimeout(Delaytime,3000);
console.log("123")
console.log("ABC")


let str = "Mohan";


let count ={};

count['h']=1;

console.log(count)


let arr2 = [3,4,5,7].sort((a,b)=>b-a);
console.log(arr2)

console.log(arr2[arr2.length-1])

