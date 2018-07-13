//a list of vehicles
let vehicles = ["motorbike", "caravan", "bike", "truck"];
//third element of list
console.log(vehicles[2]);

//function with vehicles lists
function vehicle(color, code, age) {
    let vehicles = ["motorbike", "caravan", "bike", "truck"];
    let codeName;
    switch (code) {
        case 1:
            codeName = vehicles[0];
            break;
        case 2:
            codeName = vehicles[1];
            break;
        case 3:
            codeName = vehicles[2];
            break;
        case 4:
            codeName = vehicles[3];
            break;
        default:
            color = '';
            codeName = 'Wrong code! ' + code + ' is not an option!';
    }
    let use;
    if (typeof (codeName) === 'number') {
        if (age === 0) {
            use = 'new';
        } else {
            use = 'used';
        }
    } else {
        use = '';
    }

    console.log(`a ${color} ${use} ${codeName}`);
}
vehicle('gold', 1, 3);

//Printing ad
let name = vehicles[0];
for (let i = 1; i < vehicles.length; i++) {
    if (i === vehicles.length - 1) {
        name = `${name}s and ${vehicles[i]}s`
    } else {
        name = `${name}s, ${vehicles[i]}`;
    }
}
console.log(`Welcome to amazing Sima's Garage, we service ${name}.`);

//if we added another vehicle to the list
vehicles.push("car");
name = vehicles[0];
for (let i = 1; i < vehicles.length; i++) {
    if (i === vehicles.length - 1) {
        name = `${name}s and ${vehicles[i]}s`
    } else {
        name = `${name}s, ${vehicles[i]}`;
    }
}
console.log(`Welcome to amazing Sima's Garage, we service ${name}.`);