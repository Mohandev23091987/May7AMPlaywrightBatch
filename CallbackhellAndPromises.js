
function dbOperationssync() {
    console.log("connect to db")
    console.log("fetch the records")
    console.log("filter the records")
    console.log("update the records")
    console.log("save the records")
    console.log("close the DB records")
}

dbOperationssync();



function dbOperationsAsync() {
    setTimeout(() => {
        console.log("connect to db")
    }, 1000);
    setTimeout(() => {
        console.log("fetch the records")
    }, 10000);
    setTimeout(() => {
        console.log("filter the records")
    }, 2000);
    setTimeout(() => {
        console.log("update the records")
    }, 1000);
    setTimeout(() => {
        console.log("save the records")
    }, 1000);
    setTimeout(() => {
        console.log("close the DB records")
    }, 1000);
}
// if all aysnchronous mode, if each one is dependent on other its your headache properly or you run into problems

dbOperations();

function dbOperationssolving() {
    setTimeout(() => {
        console.log("connect to db")
        setTimeout(() => {
            console.log("fetch the records")
            setTimeout(() => {
                console.log("filter the records")
                setTimeout(()=>{
                    console.log("update the records")
                    setTimeout(()=>{
                        console.log("save the records")
                        setTimeout(()=>{
                            console.log("close the connection")
                        },1000)
                    },1000)
                },1000)
            }, 2000)
        }, 10000)
    }, 1000);

}
dbOperationssolving()



// aysn are dependent with each other

//some times you want to run aysnc in sequentail




