// To identity whether the given sides are values of a valid triangle that can be formed 
let a = 10, b = 5, c = 12;
if(a+b>c && a+c>b && b+c>a) {
    console.log('Valid triangle');
}
else {
    console.log('Not a valid triangle');
}