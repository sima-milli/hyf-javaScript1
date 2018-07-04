var x = 7;
x = x % 3;
console.log("the new value if x is: " + x);
console.log("'%' is the remainder of division");
//explanation
console.log("lets divide 7/3 and round the result");
var y = Math.round(7 / 3);
console.log("now we have " + y + "lets multiply it by 3");
y = y * 3;
console.log("now we have " + y + "lets subtract it from 7")
y = 7 - y;
console.log("the result is " + y + "which is the division remainder mathematically");