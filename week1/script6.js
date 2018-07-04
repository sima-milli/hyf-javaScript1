var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(z);
var b;
if (z > a) {
    b = z;
} else {
    b = a;
}
console.log("the highest number is: " + b);