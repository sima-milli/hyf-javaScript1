let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
//Adding 'meerkat'
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("'meerkat' will be added in the index[1], the new array will be [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]")
console.log(favoriteAnimals);
//Length of favoriteAnimals
let favoriteAnimalsLenght = favoriteAnimals.length;
console.log(`The array has a length of: ${favoriteAnimalsLenght}`);
//Deleting 'giraffe'
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
//Finding the index of 'meerkat'
let merrkatIndex = favoriteAnimals.indexOf('meerkat');
console.log(`The item you are looking for is at index: ${merrkatIndex}`);