

// let obj2 = new Promise((resolve,reject)=>{
//     resolve("this is passed")
// })

let  promise = Promise.resolve("this is passed"); //static methos


promise.then((result)=>{console.log(result)});


// let obj3 = new Promise((resolve,reject)=>{
//     reject("this is passed")
// })

let promise2 = Promise.reject("this is error");

promise2.then((result)=>{console.log(result)})
.catch(error=>console.log(error));


//multiple promises 

// Promise.all([promise1, promise2, promise3])

//waits for all promises succeeded 
//one fail => everything got failed 

let  promise3 = Promise.resolve("connect to db");
let  promise4 = Promise.resolve("fetch records");
let  promise5 = Promise.resolve("update records");

Promise.all([promise3,promise4,promise5])
.then(result=>console.log(result))
.catch(error=> console.log(error));

let  promise6 = Promise.resolve("connect to db");
let  promise7 = Promise.reject("db error");
let  promise8 = Promise.resolve("update records");

Promise.all([promise6,promise7,promise8])
.then(result=>console.log(result))
.catch(error=> console.log(error));


// Promise.allSettled([array of promises])
//it doesn't give any error if one fails 
// collects all ouput and prints 

let  promise9 = Promise.resolve("connect to db");
let  promise10 = Promise.reject("db error");
let  promise11 = Promise.resolve("update records");

Promise.allSettled([promise9,promise10,promise11])
.then(result=>console.log(result))
.catch(error=> console.log(error));


//Promise.race([arrayofpromiese])
// display the output which promise exeucted first 

let promise12 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    reject("this takes 2 seconds")
   },2000)
})

let promise13 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("this takes 1 second")
   },1000)
})


Promise.race([promise12,promise13])
.then((result)=>{console.log(result);})
.catch(error=> console.log(error))


// Promise.any([arrayofPromises])

// ignores rejects promises it will take first successful promise


let promise14 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("this takes 2 seconds")
   },2000)
})

let promise15 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    reject("error")
   },1000)
})


Promise.any([promise14,promise15])
.then((result)=>{console.log(result);})
.catch(error=> console.log(error))



let a = 20;
// make use of predefined methods in any language 

// create your own logic


//



