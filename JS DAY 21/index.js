console.log("working")

//Async/Await - They are used to handle the promises more efficiently. The word async is used before 
// a function to make sure that it returns a promise. so, we therefore use sync before the function to 
//return a promise instead of some values/function.

// Await is used to wait for the result that is supposed to be returned from the Promise.
// So, we can use the keyword await when calling the function which returns a promise.
// Await is always used with Async keyword only can never be used alone.
// Aync/Await is also used for making the API calls.

const fn1 = () => {
    return "I am function one"
}

const fn3 = () => {
    return "I am function three"
}

const fn2 = () => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve ("I am function two");
    },3000);

    })
}

const callFns = async() => {
    let res1 = fn1();
    console.log(res1);

    let res2 =  await fn2();
    console.log(res2);

    let res3 = fn3();
    console.log(res3);
}

// callFns();

async function tryingPromises() {
    console.log("I am inside the function");
    const response = await fetch("https://api.github.com/users");

    console.log("Before the rseponse was received");

    const users = await response.json();
    console.log("Users are resolved");

    return users;
}

console.log("Before calling the function");
let data = tryingPromises();
console.log("after calling the function");
console.log(data);
data.then((res)=>{
    console.log("the response receive is",res);
    res.map((item) =>{
        console.log(item.id);
    })
})
console.log("End of Program");