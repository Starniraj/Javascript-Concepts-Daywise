//objects : Objects are collection of properties of methods.
//Objects have keys which are converted to string types , The property donot follow the insertion order.

//Create an object.

let mobile = {
    brand: "Samsung",
    weight: 200,
    isWorking : true,
    11 : "Android Version",
    displayInfo : function(){
        console.log(`The brand of my mobile is ${mobile.brand} and the weight is ${mobile.weight} which is in the working conditiion${mobile.isWorking},also 
        with a android version of ${mobile["11"]}`)
    }

}

 console.log(mobile);
 console.log(mobile.displayInfo());

 delete mobile.isWorking;
 console.log(mobile.hasOwnProperty("brand"));

 mobile.camera = "32px";

 //---------------------------------------------------------------

 let mobile1 = {};// empty object

 mobile1.brand = "OnePlus";
 mobile.weight = 190;
 mobile1.isWoorking = false;

 console.log(mobile1);

 //---------------------------------------------------------------
 
 function Mobile(brand,weight,camera){
     this.brand = brand;
     this.weight = weight;
     this.camera = camera;

 }

 let apple = new Mobile("Apple",190,"13px");
 let Vivo = new Mobile("Vivo",210,"108px");

 console.log(apple);
 console.log(Vivo);

 console.log(Object.keys(apple));
 console.log(Object.values(apple));

 for(const [key,value] of Object.entries(apple)){
     console.log(key,value)
 }

 //this keyword

 //In an Object this refers to the Object
 //When we use this keyword alone, then it points to Global Object
 //In a function, this refers to global to parent Object,

 value = 23;
 console.log(value);
 console.log(this)

 //----------------------------------------------------------

let arr1 = [1,2,3,4,5];
let arr2 = [7,8,9,10,11];

console.log(arr1.concat(arr2));
let arr3 = [...arr1,...arr2];
console.log(arr3);

//Create two students having properties as name ,age ,class and roll no show details using object constructor.


function Student(name,age,section,rollno ){
    this.name = name;
    this.age  = age;
    this.section = section;
    this.rollno = rollno;

}

let stu1 = new Student("Niraj",28,"B", 1181099024);
let stu2 = new Student("Prem", 24, "A", 119110902);

console.log(stu1);
console.log(stu2);

for(const [key,value] of Object.entries(Student)){
    console.log(key,value)
}





Function Constructors: 1. Func const are use for creating objects in js. 2. We can call the constructor directly. 3. constructor name should starts with Caps. 4. function Name(){ .............} var march = new Function() Function( arg1, ar2, ....){ name : ""; class : " "; } 5.when we call the constructor , it will create an object. 6.dont have any return stmt. 7. Any varibale which gets created by using any constructor fun. Then that variable will persists the properties that constructor function provides. var march = new Function() 8. Adding property to constructor using prototype. 


what is hoisting? 1.using the variable or fun before defining it. 2.calling the func before declaring. 3. let and const doesnot support hoisting.(TDZ) 4.var support hoisting, hoisting happen at the top of code. 5.it will get memory located. 6. whenever we call var , fun we need to initailaise them in before call. 


What is the DOM? 1.Documentary Object Model. 2. it will manipulate the html elements in the webpage. 3.Accessing the elements from html and make changes with js. 4. it will help make the document dynamically. 5.it is programming interface or web browser. HTML is used to structure the web pages and Javascript is used to add behavior to our web pages. When an HTML file is loaded into the browser, the javascript can not understand the HTML document directly. So, a corresponding document is created(DOM)(Documentary Object Model) DOM is basically the representation of the same HTML document but in a different format with the use of objects. Javascript interprets DOM easily i.e javascript can not understand the tags(<h1>H</h1>) in HTML document but can understand object h1 in DOM. Now, Javascript can access each of the objects (h1, p, etc) by using different functions. 


Difference between undefined vs not defined vs NaN. undefined: variable is defined,but in memorey creation phase, it will take undefined. let marks =50; not defined: varibale which is not present in either global or local scope. NaN: Not a Number, let marks ="50" 

