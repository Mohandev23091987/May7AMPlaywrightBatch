


//named export
//exporting with exact names 
 let a = 10;

 let add = (a,b)=>{
    return a+b;
};

 class Student{

    //variables
     name;
     id;
    //constructor 
     constructor(name,id){
        this.name=name;
        this.id=id;
     }
    //methods
     displayDetails(){
        console.log(`${this.name} his id is ${this.id}`)
     }

}

 let addingtwonubmerfor = (a,b)=>{
    return a+b;
};

export default function greet(){
   console.log("hello");
}


export {a,add as addition,Student,addingtwonubmerfor}