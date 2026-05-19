

//function
//callback  => call back hell
//promises 

//aync functions with await


//promise is a object


//promise state pass => resolve()
//promise state fail => reject()


//pending
//successful/pass/fufilled
//unsuccessful/failed/unfulfilled


//executor

//

//async


let promiseobj = new Promise((resolve,reject)=>{

reject("this is a error mypogram");
});
//fullfilled ,

promiseobj.then((result)=>{
console.log(result)
})
.catch((error)=>{
console.log(error)
})
.finally(()=>{
 console.log("program compelted")
});

//promises chaining 


//promise

//TS = js+ extra featues






let pro = new Promise((resolve,reject)=>{

reject("fail");


});


pro.then((x)=>{
console.log(x);
})


.catch((y)=>{
console.log(y);
});


// how we are going to resolve callback hell
//Promise methods 

//await 


new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("filter the records")
        resolve("succeslly");
    }, 2000);
})


//async function

// lot predefined 






