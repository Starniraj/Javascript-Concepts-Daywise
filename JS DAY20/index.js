// Callback Hell - They are just a name or convention for using Javascript functions.
// It instead of returning results immediately like other functions, takes time to produce the 
// result . These are more of like an I/O operations .
// CallbackHells are in a form of arrow shaped, pyramid shaped. 

// const getEmployeeID = () => {
//     setTimeout(() => {
//         console.log("Fetching the Employee details");
//         let id = [1,2,3,4,5];
//         console.log(id);
    
//         setTimeout(() => {
//             let employeeDetails = {
//                 name : "Arjun Kanungo",
//                 age : 34,
//             }
//             console.log(`The name of the employee is ${employeeDetails.name} an the age 
//             is ${employeeDetails.age}`);

//             setTimeout(() => {
//                 employeeDetails.gender = "Male",
//            console.log(`The name of the employee is ${employeeDetails.name} an the age 
//             is ${employeeDetails.age} and the gender is ${employeeDetails.age}`);

//             setTimeout(() => {
//                 employeeDetails.salary = 21000;
//             console.log(`The name of the employee is ${employeeDetails.name} an the age 
//             is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and salary is ${employeeDetails.salary}`);  

//             })
//             },2000);
//         },2000)
//     },2000)
// }

// getEmployeeID();

// Promises - Promoises are used to handle asynchronus operations in Javascript. They are easy to manage dealing with multiple asynchronus operations where callbacks can create callback 
//hells leading to unmanageable code.

//This doesn't means that Promosies are only used for avoiding callback hells, instead  they are often used for
//handling asynchronus operations.

// Promises have two executer functions as parameters , namely resolve and reject. If the data is fetched correctly then the control is passed to resolve method which in turns calls the . then()
// method , but if the data isn't fetched for some reasons i.e. there is an error, then the reject method is called which further calls the.cathc() method.

//There are three stages in Promises

// 1. Pending _ When the promise is still executing i.e. not yet resolved or rejected then they are called in Pending stage.
// 2. Resolved/fulfilled - When the promise is resolved or have fetched the data correctly, it ends up being into resolved state.
// 3. Rejected - When the promise fails in fetching the results, it ends up into rejected state.

// Promise creation 

const getEmployeeID = new Promise((resolve,reject) =>{
    setTimeout (() => {
        let id = [1,2,3,4,5];
        resolve(id);
        reject("The data is not found")
    },2000);
})

const getEmployeeDetails = (data) => {
  return new Promise((resolve,reject) =>{
    setTimeout((data) => {
            let employeeDetails = {
                name : "Arjun Kanungo",
                age : 34,
      }
      console.log("I am inside the method", data);
      resolve(`The name of the employee is ${employeeDetails.name} and the age is ${employeeDetails.age}`);
    },3000,data)
  })
}

//Promise consuming : used for consumption 

// getEmployeeID 
//       .then((id) => {
//           console.log(id);
//       getEmployeeDetails("Hi").then((data) => {
//           console.log(data);
//       })
// })
//       .catch((err) =>{
//           console.log("Error message :", err);
// })
    //   .finally(() =>{
    //       console.log("End of Program")
    //   })
  
let promise = new Promise((resolve,reject) => {
    resolve();
})

promise
    .then(() => {
        setTimeout(() => {
            console.log("First call");
        },1000);
    })
    
    .then(() => {
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Second call");
            resolve();
        },3000);
    });
})

    .then(() => {
        setTimeout(() => {
            console.log("Third call");
        },2000);
    })


