// console.log("Working")

// const handleSubmit = () =>{
//     const username = document.getElementById('name').value;
//     const useremail = document.getElementById('email').value;
//     const userclg = document.getElementById('clg').value;
//     const userphone = document.getElementById('phone').value;
//     const userage = document.getElementById('age').value;
//     console.log(username);
//     console.log(useremail);
//     console.log(userclg);
//     console.log(userphone);
//     console.log(userage);

//     localStorage.setItem("username",username);
//     localStorage.setItem ("useremail",useremail);
//     localStorage.setItem ("userclg",userclg);
//     localStorage.setItem ("userphone",userphone);
//     localStorage.setItem ("userage",userage);



//     sessionStorage.setItem("username",username);
//     sessionStorage.setItem("useremail",useremail);
//     sessionStorage.setItem ("userclg",userclg);
//     sessionStorage.setItem ("userphone",userphone);
//     sessionStorage.setItem ("userage",userage);

// }

// const showDetails = () =>{
//     const data = localStorage.getItem("username");
//     const data1 = 
//     localStorage.getItem("useremail");
//     const data2 = 
//     localStorage.getItem ("userclg");
//     const data3 =
//      localStorage.getItem ("userphone");
//     const data4 =
//      localStorage.getItem ("userage");
//     console.log("data");
//     console.log("data1");
//     console.log("data2");
//     console.log("data3");
//     console.log("data4");

// }


// TypeError, SyntaxError, ReferenceError

// const value = () ={

// }

// const a 3;

//ReferenceError

// console.log(david);
// console.log(a());

//TypeError

// const b = 20;
// console.log(b());

// const c = 10;
// c = 20;

//Symbols are always guranteed to be unique

let sym1 = Symbol("Cricket");
let sym2 = Symbol("Cricket");
console.log(sym1 ===sym2);

// TDZ - Its a place where the let and const variables reside as long as they are not declared. It also has a default value of undefined only but if we try to access them, then will get ReferenceError. 

// IIFE = Immdediately Invoked Function Expressions -

(()=>{
    const david = "David";
})

const david = "David";