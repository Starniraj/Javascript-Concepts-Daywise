console.log("working")

const StudentPrototype = {

    calcAge(){
    console.log(2022- this.bYear);
},
initialise(fname,lname,bYear){
    this.fname = fname;
    this.lname = lname;
    this.bYear = bYear;
   }

}

const honey = Object.create(StudentPrototype);
console.log(honey);
honey.initialise("Honey", "Tambi", 1995);
console.log(honey);
honey.calcAge();

const PersonPrototype = Object.create(StudentPrototype);
console.log(PersonPrototype);
PersonPrototype.initialiseOne = function(fname, lname, bYear, course){
    StudentPrototype.initialise.call(this, fname, lname, bYear);
          this.course = course;
}
PersonPrototype.introduce = function(){
    console.log(`My name is ${this.fname} ${this.lname} and my course is ${this.course}`);
}

const jay = Object.create(PersonPrototype);
console.log(jay);
jay.initialiseOne("Jay", "Dubey", 1986, "CSE");
console.log(jay);
jay.calcAge();
jay.introduce();

console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__.__proto__);

//==============================================

//closure: Closure is not something that we create manually or explicitly. It happens automatically in certain situations which be need to recognize.
// Closure makes a function remember all the variables that existed at the function birthplace initially. 
//Any function always has access to the variable environment of the execution context in which the function was created.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger Count is ${passengerCount}`);

    };
};

const bookie = ticketBooking();
bookie();
bookie();
bookie();


//In closure even though the execution context is destroyed, the variable environment somehow 
// keeps living somewhere in the engine.


// let f;

// const g = fucntion(){
//     const a = 23;

//     f = function(){
//         console.log(a*2);
//     };
// };

// const h = function(){
//     const b =23;

//     f = function(){
//         console.log(b*2);
//     };


// };

// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);

//SetTimeout and SetInterval

setTimeout((fruit1,fruit2) => {
    console.log(fruit1,fruit2 );
},1000, "Banana", "Orange" );


// const fruits = ["Banana", "Orange"];
// const timer = setTimeout((fruit1,fruit2) => {
//     console.log(fruit1,fruit2 );
// },5000, 
// ...fruits
//  );
// console.log("Waiting for the time to finish");

// if(fruits.includes("Banana")){
//     clearTimeout(timer);
// }

// setInterval(() => {
//     console.log("Hi");
// },2000);

const boardingPassengers = () => {
    const peoplePerGroup = n/3;

    setTimeout(()  => {
      console.log(`Boarding ${n} number off passengers`);
      console.log(`Boarding ${peoplePerGroup} people per group`);
      console.log("Boarding in secs", wait);
    }, wait*2000);
}

boardingPassengers(180,2);
