// To identify whether the given sides are sides of an equilateral or isosceles or scalene triangle 
// Method 1
// let a = 10, b = 12, c= 10;
// if(a==b && b==c && c==a) {
//     console.log('Equilateral triangle');
// }
// else if(a!=b && b!=c && c!=a) {
//     console.log('Scalene triangle');
// }
// else {
//     console.log('Isosceles triangle');
// }
// ======================================================
// Method 2
let a = 5, b = 6, c = 7;
if(a==b && b==c && c==a) {
    console.log('Equilateral triangle');
}
else if(a==b || b==c || c==a) { // any one also evaluates to true -- the whole condition evaluates to true 
    console.log('Isosceles triangle');
}
else {
    console.log('Scalene triangle');
}

