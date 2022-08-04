//Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times.
 //function definition from lines 6-8 
 //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed 
//  function multiply(parameter1, parameter2){ 
//      console.log("Inside multiply function"); 

//    //the function body can have more than one line of code. 
// } 
//  //function calling on line 11
//   multiply(arg1,arg2);
//  //name of a function followed by open and close parenthesis. 
//  //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas. 


//  //Arrow Function --------

//  const addition = (parameter1, parameter2) =>{
//     console.log("I am in addition function"); 

//  }

//  addition(arg1,arg2);

//  //Function Expression -------

//  const subtraction = function(parameter1, parameter2){
//     console.log("I am in subtraction function"); 

//  }

// subtraction(arg1,arg2);


// function sayHi(){
//     console.log("Hi!!!!");
//     let a= 6;
//     let b= 7;
//     let result= a+b;
//     console.log(result)
// }
// sayHi();

// function addition(num1,num2){
//     let result = num1 + num2;
//     console.log(result);
// }

// addition(5,6);

// function multiply(num1,num2){
//     let result = num1 * num2;
//    return result;
// }

// let returnResult = multiply(7,9);
// console.log(returnResult);

// console.log(multiply(5,6));

//--------------------------------------------------------------

//The Lexical Environment and Scope chain

let i = 5;
function one(){
    console.log(i);
    two();

    function two(){
        console.log(i);
    }
}

one();

//----------------------------------------------------------


//Block Scope and Shadowing

let f = 2;
const g = 2;
var h = 2;
    console.log(f);
    console.log(g);
    console.log(h);
     

{
    let f = 2;
    const g = 2;
    var h = 3;
    console.log(f);
    console.log(g);
    console.log(h);
     
}
console.log(f);
console.log(g);
console.log(h);

 //let m = 4; 
//console.log(m);//4 // 

//let m= 5 
//  console.log(m);//5  

  
//  console.log(m);//4 
//  const n = 4; 
//  console.log(n);//4
// const n= 5 
// console.log(n);//5 // } 


// ----------------------------------------------------------------------------------------

// Array : 

  