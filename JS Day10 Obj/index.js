function add (a,b){
    return a+b
}
function higherOrder(a,addReference){
    return addReference(a,20);
}

higherOrder(30,add);