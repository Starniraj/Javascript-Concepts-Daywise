// // let student ={
// //     fname: "Sidhant",
// //     lname: "Gupta",
// //     showDisplay: function(){
// //         console.log(this.fname,this.lname);
// //     }
// // }
// // student.showDisplay();

// // let student1 ={
// //     fname : "Niraj",
// //     lname : "Singh",
// //     age : 23,

// // }

// // let student2 = {
// //     fname : "Raju",
// // }

// // student2.__proto__ = student1;

// // console.log(student2);
// // console.log(student2.lname);

// // console.log(student1.__proto__);

// //call /Apply/ Bind methods  - process for borrowing function;

// let employee1 = {
//     fname : "Niraj",
//     designation : "Devloper",
//     id : 2045,
//     // showdDetails: function(){
//     //     console.log(this.fname,this.id,this.designation);
//     // }
// }


// function showDetails(age,gender){
//    console.log(this.fname,this.id,this.designation,age,gender);

// }

// let employee2 = {
//     fname : "Aman",
//     designation : "Engineer",
//     id : 3456,
// }
 

// let employee3 = {
//     fname : "Akash",
//     designation : "Analyst",
//     id : 7890,
// }

// // employee1.showdDetails.call(employee2);
// // employee1.showdDetails.call(employee3);//take the args in normal method 
// // employee1.showdDetails.apply(employee3);//take the args in forms of array 

// showDetails.call(employee1,23,"M");
// showDetails.call(employee2,23,"M");
// showDetails.call(employee3,23,"M");


// showDetails.apply(employee1,[23,"M"]);
// showDetails.apply(employee2,[23,"M"]);
// showDetails.apply(employee3,[23,"M"]);

// //lbind return the function it run when it called 

// // let res1 = employee1.showDetails.bind(employee2);
// let res2 = showDetails.bind(employee1);
// // res1();//pass the arguments with comma separated operaror
// res2(20,"M");

// showDetails.bind(employee2)(23,"M");
// showDetails.bind(employee3)(23,"M");

// ///////

// const StudentPrototype = {
//     calcAge(){
//         console.log(2022 - this.bYear);
//     },
//     initialise(fname,lname,bYear){
//         this.fname = fname;
//         this.lname = lname;
//         this.bYear = bYear;
//     }
// }

// const ramesh = Object.create(StudentPrototype);
// console.log(ramesh);

// ramesh.fname = "Ramesh";
// ramesh.lname = "Thakur";
// ramesh.bYear =  1990;
// ramesh.calcAge();

// console.log(ramesh);

// const kirsten = Object.create(StudentPrototype);
// kirsten.initialise("Kirsten","Stewart",1986);
// kirsten.calcAge();
// console.log(kirsten);

// // Classes =------------------------------

// // Classes in JS does not work exactly the same way as that of Class in java /C++
// //They are just a syntactic sugar to object prototype, instances that we have read.
// //They are special kind of functions with some variations .

// //1. Classes are also First Class Function.
// //2. Classes are not hoisted.
// // --------------------------------------------------------

// const ClassPrototype = class{
    
//     constructor(fname,lname,bYear){
//         this.fname = fname;
//         this.lname = lname;
//         this.bYear = bYear;
//     }
//     calcAge(){
//         console.log(2022-this.bYear);
//     }
// }

// // const jarvis = Object.create(ClassPrototype);
// const jarvis = new ClassPrototype("Jarvis","Valley",1992);
// console.log(jarvis);
// jarvis.calcAge();

// console.log(jarvis.__proto__);

// ClassPrototype.prototype.greet = function(){
//     console.log("Hi I am someone");
// }

// jarvis.greet();
// console.log(jarvis.