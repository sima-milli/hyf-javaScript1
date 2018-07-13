function vehicle(color, code, age) {
    let codeName;
    if (code === 1) {
        codeName = 'car';
    } else if (code === 2) {
        codeName = 'motorbike';
    } else {
        color = '';
        codeName = 'Wrong code!';
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
vehicle('black', 1, 3);