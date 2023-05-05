// To find the minimum of 3 numbers
let x = 10;
let z = 6;
let y = 20;
// let x = 10, y = 20, z = 6;

if(x<y && x<z) {
    console.log(x,'-> x is smallest');
}
else if(y<x && y<z) {
    // manually check all conditions bcs we don't know which evaluated to false earlier 
    console.log(y,'-> y is smallest');
}
else {
    console.log(z,'-> z is smallest');
}