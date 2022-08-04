//map preserves the order of insertion of key value pairs 
//map also preserves the data types pf keys i.e. it doesnot converts the keys to string by default like what object does i.e it can be store keys on any data types.

let map = new Map();

//how do we set values to map 

map.set("name", "Ravi");
map.set("age", 29);
map.set("phone", 9876543210);
map.set(1, "one");
map.set("age", 29);
map.set("true","false");

console.log(map.get("name"));

console.log(map.has("Email"));

console.log(map.delete(1));

// map.clear()

console.log(map);
console.log(map.size);

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value);
}

for(let entry of map.entries()){
    console.log(entry);
}

map.forEach(function(value,key){
    console.log(key,value);
})

// -------------------------------------------------------------------

//Sets has no keys but stores only UNIQUE Values...
//Sets can not give u key value pairs, but only value value pairs using.entries() method.

let set = new Set();

set.add("Apple");
set.add("Banana");
set.add("Oranges");
set.add("Oranges");
set.add("Oranges");
set.add("Mangoes");
set.add("Litchi");

console.log(set)

console.log(set.values());
console.log(set.keys());
console.log(set.has("Kiwi"));
console.log(set.has("Oranges"));
console.log(set.has("Banana"));


for(let value of set.values()){
    console.log(value);
}

for(let entry of set.entries()){
    console.log(entry);
}

let key = ["apple", "apple"];
console.log(key[0]);

set.forEach(function(value,key){
    console.log(key)
})





