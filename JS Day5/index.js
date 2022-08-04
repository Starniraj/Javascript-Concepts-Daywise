//loop : reapeat cod of block executed.

//for loop: 


for(let i = 1; i < 10; i++){
    console.log(i);
}

//while loop:

let a = 10;
while(a > 0){
    console.log(a);
    a--;
}

//using for loop try to print the multiple of 2

for(let j = 1; j<=10; j++){
    console.log(j*2);
}

let j = 1;
while(j<=10){
    console.log(j*2);
    j++;
}

let k = 2;
do{
    console.log(k);
    k=k+2;

} while( k<= 20);

// for -in :
//if our value are n then index in n-1.

let tourists =["niraj", "pawan" , "sid", "prem" ]
for (let a in tourists){
    console.log(a);
}

//for -of loop :

for (let values of tourists){
    console.log(values);
}

//for each loop:

tourists.forEach((value,index)=>{
    console.log(value,index)
})

 