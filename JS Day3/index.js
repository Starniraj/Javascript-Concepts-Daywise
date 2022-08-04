//not defined: since we have not declare the variable and try to access will through us an a reference error variable not defined.
// console.log(myAge); not defined

//undefined: if a varaible is defined not assign any value to variable yet but if we try to access the variable the we will get the error undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating"
console.log(myHobbies);

// null: Its a default value assigned by a user to the variable as long as the variable has not been assign its orginal /updated value.

let amIadult = null;
amIadult = true;
console.log(amIadult);


//global scope and local/block scope
{
  let fname = "Hari";

  const lname = "Bajaj";

  var age = 29;

  console.log(fname, lname, age);
}

// in global scope genrally we are not able to access block scope variable as long as there's Let/const keyword so it will give us a referenceError: variable not defined 
// but for we can access them even on global scope space.


//........................................................

//Hoisting: Its only supported  with that of var keywords and with the function. Let and const keywords donot support hositing.

//Let keyword variables cannot be accessed before declaration/initilization.

//Note -For var keyword variables, as long as they are not assigned values will give us undefined but the moment we declare a value to it, it will give us the assigned value.

console.log(game2);
var game2;
game2 = "Badminton"
console.log(game2);

//Hoisting in functions

//function are hoisted because of which we can the fuction before decalaring the function.
add(3, 4);

function add(b, a) {
  let result = a + b;
  console.log(result);
}

//Arithmetic Operator
//+, -, /, *, %

//modulas - It gives us the remainder

console.log(2 + 3);//5
console.log(2 - 3);// -1
console.log(2 * 3);//6
console.log(2 / 3);//0.66666
console.log(2 % 3);//2

//comparison operator
//== only check the value and not data types but === checks both the values and the datatypes.
//< , > <= , >= , == , ===  !=
console.log(2 < 3);//true(boolean values as answer)
console.log(2 > 3);//false
console.log(2 >= 3);//false
console.log(2 <= 3);//true

console.log(2 == 2);//true
console.log(2 === 2);//true
console.log(2 == "2");//true
console.log(2 === "2");//false
console.log(2 != 3);//true

//logical operators: 
//  ||, &&, !

console.log(2 || 3);//2
console.log(0 || 3);//0
console.log(1 && 3);//3
console.log(0 && 3);//0

console.log(!0)//true
console.log(!1)//false
console.log(!2)//false

//increment decrement operator
//post increment operatror (++)

let a = 1;
a++;
console.log(a);//2
a--;
console.log(a);//1
console.log(a++);
console.log(a);//2

a *= 3;//6
a /= 3;//2
a += 2;//4
a -= 4;//0


//pre increment/decrement

//first increment/decremetn the value based on the operator sign and then prints the value.

//Bitwise operator : 


console.log(2 | 3);    //OR in any place 1 is inportant for getting 1 
console.log(2 & 3);   //AND rule: above and below corresponding bith should 1.
console.log(2 ^ 3);   //XOR rule: corresponding value sholud be opposite to get 1.but if similar value then a O.
console.log(2 << 3);  //left shift: shift to these many positions.
console.log(2 >> 3);  //right shift: 


//ternary operators: 

2 > 3 ? console.log("2 is greater than 3") : console.log("2 is less than three");

let x = 2;
let y = 3;
x > y ? x++ : x--;
console.log(x);

//..................................

//if block works 
//if can be used all alone but else use with eles if
// only if the IF block condition is true, it will enter inside the if block otherwise inside the else block 
let g = 3;

if (g > 4) {
  console.log(g);
}

else {
  console.log("entered inside the else block ")

}

if (g > 4) {
  console.log(g);
}

else if (g == 3) {
  console.log("g value is 3");
}

else {
  console.log("entered inside the else block ");
}

//............................................................

//if a person is adult , child or senior citizen 

//let check = F;

//if ( (F)/10) {
  //console.log("I am a child");
//}

//else if ((F)/10) {
  //console.log("I am an adult");
//}

//else {
  //console.log("I am a senior citizen");
//}

//..................................
let number = 2;
switch (number) {
  case 1:
    console.log("I am one");
    break;

  case 2:
    console.log("I am two");
    break;

  case 3:
    console.log("I am three");
    break;

  case 4:
    console.log("I am four");
    break;

  default:
    console.log("I am greater than four");
    break;
}

//................................................
















