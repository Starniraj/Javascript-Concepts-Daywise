console.log("working")

//charAt,

let str = "Niraj Singh";
console.log(str.length);
console.log(str.charAt(2));

//endsWith

console.log(str.endsWith("h"));

//includes

let sentence = "Hello World";
console.log(sentence.includes("World"));

//indexOf

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));

//length

console.log(str.length);


// replace: Not going to manipulate the original string.

console.log(str.replace("Niraj","Ajay"));

// search

console.log(str.search("Singh"));

//substr

console.log(sentence.substr(0,4))//first vlaue is the index position and the second value is the no of charcters from the index position mentioned in the first value.

// substring: first index value is inclusive and last index value is exclusive.

console.log(sentence.substring(0,6));
console.log(sentence.substring(7,0));

let email = "singhniraj637@gmail.com";
let values = email.split("@");
console.log(values);


//maps and sets 



