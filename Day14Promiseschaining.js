


//promises chaining => is pattern in javascript 
// where you link multiple aysnchronous funcitons together using .then() so they can run in sequence 

function connetToDB(){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {

        resolve("connected to DB successfully, proceed with fecth records");
    }, 1000);

    })
}

function fetchRecords(str){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log(str)//connected to DB successfully, proceed with fecth records
        resolve("fetch records done, proceed with filter");
    }, 10000);

    })
}

function filterRecords(str){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log(str)
        resolve("filter is done proceed with edit");
    }, 2000);

    })
}

function updateRecords(str){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log(str)
        resolve("edit is done save records");
    }, 1000);

    })
}

function saveRecords(str){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log(str)
        resolve("save done proceed with close connectio");
    }, 1000);

    })
}

function colseConnection(str){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log(str)
        resolve("colsed connection");
    }, 1000);

    })
}



connetToDB()  //connected to DB successfully, proceed with fecth records
.then((result)=>fetchRecords(result))     //arrow function //callback
.then((result)=>filterRecords(result))//
.then((result)=>updateRecords(result))//
.then((result)=>saveRecords(result))//
.then((result)=>colseConnection(result))//
.catch(error=>{console.log(error)});

//=========================================================

function connetToDBCallback(){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("connect to db")
        resolve("connect to db done");
    }, 1000);

    })
}

function fetchRecordsCallback(){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("fetch records")
        resolve();
    }, 10000);

    })
}

function filterRecordsCallback(){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("filterRecords")
        resolve();
    }, 2000);

    })
}

function updateRecordsCallback(){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("update Records")
        resolve();
    }, 1000);

    })
}

function saveRecordsCallback(){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("Save Records")
        resolve();
    }, 1000);

    })
}

function colseConnectionCallback(){

    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("colseConnection")
        resolve();
    }, 1000);

    })
}

// connetToDBCallback()
// .then(fetchRecordsCallback)
// .then(filterRecordsCallback)
// .then(updateRecordsCallback)
// .then(saveRecordsCallback)
// .then(colseConnectionCallback)
// .catch(error=>{console.log(error)});

  
//await 
//Async functions with Await

 async function DBOperations(){
    try{
        //seuentially 
    let result =await connetToDBCallback();
    console.log(result)
    await fetchRecordsCallback(); //10
    await filterRecordsCallback();
    await updateRecordsCallback();
    await saveRecordsCallback();
    await colseConnectionCallback();
    console.log("ravi")
    }
    catch(error){
        console.log(error)
    }
}

DBOperations();



// try{
//     let result =await connetToDBCallback();
//     console.log(result)
//     await fetchRecordsCallback();
//     await filterRecordsCallback();
//     await updateRecordsCallback();
//     await saveRecordsCallback();
//     await colseConnectionCallback();
//     }
//     catch(error){
//         console.log(error)
//     }


//synchronous
//web api methods => code aysnchronous   > synchronized => 
// callback => callback hell 
// promises 
//Promisies chaining 
//Promises => aysnc function with await 
