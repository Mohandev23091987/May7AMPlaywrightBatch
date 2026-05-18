//real time => both contaion with loops , loops with continues 


//loops 
// reptitive work => loops 

// initialization i=1  // only one time
// condtion i<=5
// increment or decrement i++ everytime
    // console.log(1);  
    // console.log(2);
    // console.log(3);
    // console.log(4);
    // console.log(5);

    // for(let i=1;i<=5;i++){  // 1<=5 // 2, 2<=5
    //  console.log(i);  // 1  2 3 4 5
    // }

    //even or odd
    
    // 10/2 =5
    // 10%2 = 0
    //1%2 ==> 1 ===0
    //2%2 > 0 ===0 

    //  for(let i=1;i<=10;i++){  
    //   if(i%2===0){
    //     console.log(i);  //2
    //   } 
    // }

    //while 

    let i=1;
    while(i<=10){
     console.log(i);
     i++;
    }

    //do while
     let j=15;
    do{
     console.log(j);
     j++;
    }while(j<=10)

    
    // for of  => to read the values from arrays or strings 

    console.log("this is for of loop");
    let numarray =[2,10,20];  // 

    for(let num of  numarray ){
        console.log(num);
    }

    let str ="QAMASTERS";

     for(let letter of  str ){
        console.log(letter);
    }


    // for in => use object properties  => by using this you can the get the values


let personObj = {
  name:"Rama",
  address:"india",
  age:35
};

for(let key in personObj){
    console.log(key + " = " + personObj[key] );
    //console.log(personObj[key]);
}


console.log("learning  break");

  for(let i=1;i<=10;i++){  
  
    if(i==7){
        break;
    }
    console.log(i);
    }

    
console.log("learning continue");
// 1 2 3 4 5 7 8 9 10

  for(let i=1;i<=10;i++){  
  
    if(i==6){
        continue;
    }
    console.log(i);
    }


    let x =20;

    if(x=30){  // 30
         console.log("true");
    }else 
    {
         console.log("flase");
    }

console.log("guess output")
    let k=1;
    while(k<=4){
        k++; // 2  3 4
        console.log(k);  // 2  3 4 5
    }

//  1 2 3

console.log("sum of the numbers")
let sum =0;

for(let n=0;n<=20;n++){
 sum = sum + n;
}

console.log(sum);

// 10 to 1
// vowels 
// consonants 
// 2 , 8 table

// == 
console.log(2=="2");
console.log(2==="2");
















  
