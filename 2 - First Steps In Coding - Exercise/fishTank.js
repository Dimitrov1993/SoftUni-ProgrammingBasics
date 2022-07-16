function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let higth = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let tank = length * width * higth;
    let liters = tank / 1000;
    let litersNeeded = liters * (1 - percent);

    console.log(litersNeeded);

};

fishTank(["85 ", "75 ", "47 ", "17 "]);