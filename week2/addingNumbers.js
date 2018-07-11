function addNumbers(a, b, c) {
    if (typeof (a) === 'number' && typeof (b) === 'number' && typeof (c) === 'number') {
        let result = a + b + c;
        return result;
    }
    return 'must insert numbers only!';
}
let resultOfAddNumbers = addNumbers(2, 15, 24.5);
console.log(resultOfAddNumbers);