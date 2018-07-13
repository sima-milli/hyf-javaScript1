//Declaring empty object
let myObject = {};
//or 
let someObject = new object();

//
let teachers = {
    module1: 'Philip',
    module2: ['Unmesh', 'Bonan'],
    module3: ['Mauro', 'Daan']
};
teachers.languages = ['HTML-CSS', 'Git', 'javaScript1'];

//Checking equality
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
//x == y (I honestly thought it will be true!)
console.log(x == y); //false
//x === y
console.log(x === y); //false
// z == y
console.log(z == y); //true
// z == x
console.log(z == x); //false

//Showing changes
let o1 = {
    foo: 'bar'
};
let o2 = {
    foo: 'bar'
};
let o3 = o2;

o2 = o2.foo = 'foobar';
console.log(o3); //o3 will change
//if we change o1, o3 will not change(o1 and o3 are not related)
//and the order matters

//typeof typeof
let bar = 42;
typeof typeof bar; //it will return "string" because the output of typeof is always "string"