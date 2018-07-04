var newArray = [1, 'string', true, [], {}];
//if the return value of the following method is true then it is Array
if (Array.isArray(newArray)) {
    console.log("Yes, you can add multiple types to an Array");
} else {
    console.log("No, you can't add multiple types to an Array");
}
//comparing infinities
if (6 / 0 === 10 / 0) {
    console.log("Looks like it is possible");
} else {
    console.log("Hmm that is not possible")
}