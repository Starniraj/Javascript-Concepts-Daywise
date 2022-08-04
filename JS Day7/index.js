//Array: its a variable that store multiple variable
// x blocks to  store values then index ranges wil be from 0: (x-1)
// value can be boolean ,string ,float or combiination of all of these.
// method 1:- Creating and assigning values to an array 
// let names = ["Niraj", "Sid", "Prem","Pawan"]
// console.log(names);

// //method 2: Create an empty array, and then start assigning valuue to them as per the index position
// let name2 = [];

// name2[0] = "Niraj";
// name2[1] = "Ram";
// name2[2] = "Shayam";

// console.log(name2);

// //method 3: Create an array uisng constructor

// let name3 = new Array("Raju","SHyam","Baburao");
// console.log(name3);

// let multiple = ["Niraj", "25.5","0542","****", "25%"]
// console.log(multiple);

// var multiple2 = new Array("Nikhil","1181099014","50%","*****");
// console.log(multiple2);

// //Push, Pop, Shift, Unshift, Length , indexof , LastIndexof

// names.push("Raju");
// names.push(7);
// console.log(names);

// //pop helps us to remove the vlaue a from the last position.
// names.pop();
// console.log(names);

// //shift helps us to remove the value from the starting.
// multiple.shift();
// console.log(multiple);

// //unshift helps us to add the first position.
// multiple2.unshift("Aniket");
// console.log("multiple2");

// //length

// console.log(names.length);

// //indexof, lastIndexOf, join, concat, reverse, sort , slice , spice.

// let num1 = [1,2,3,4,5,5];
// let num2 = [6,7,8,9,10];
// console.log(num1.indexOf(5));
// console.log(num1.lastIndexOf(5));

// //concat : donot changes the orginal array 

// console.log(num1.concat(num2));

// //join
// console.log(num1.join(" $ "));

// //reverse : it will print the index from end to start 

// num1.reverse();
// console.log(num1);

// //sort: it modify the original array

// let num3= [5,2,6,7,8,9,1];
// // console.log(num3.sort());

// // console.log(names.sort());

// //using sort followed vy reverse gives u values arranged in descending order.
// console.log(names.sort().reverse());

// //splice, slice
// //first val gives the index and second val gives the numb of values to be removed.
// //console.log(num3);
// //console.log(num3);

// //slice

// console.log(num3.slice(2,4));


// let array = [1,2,3,4,5];
// let mult = 1;

// for(let m = 0; m< array.length; m++){
//     mult*= array[m];
// }

// console.log(' Product :  ' +mult);

// //map, filter, reduce
// they are known as one linera function and it nvers modify the original array and map returns a new array 

let numbers = [1,2,3,4,5];
numbers.map((item) =>{console.log(item)})

//filter:

let res = numbers.filter((item)=>{
    return item > 3
})
console.log(res);

//reduce: 

let res1 = numbers.reduce((acc,cur)=> acc = acc * cur);

console.log(res1)
    



