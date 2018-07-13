function vehicleType(color, code) {
    let codeName;
    if (code === 1) {
        codeName = 'car';
    } else if (code === 2) {
        codeName = 'motorbike';
    } else {
        color = '';
        codeName = 'Wrong code!';
    }
    console.log(`a ${color} ${codeName}`);
}
vehicleType('black', 1);