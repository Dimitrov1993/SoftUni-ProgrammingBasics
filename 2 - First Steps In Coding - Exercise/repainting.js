function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let materials = ((nylon + 2) * 1.50) + ((paint + (paint * 0.10)) * 14.50) + (thinner * 5.00) + 0.40;
    let workers = (materials * 0.30) * hoursNeeded;

    console.log(materials + workers);
};

repainting(["10 ", "11 ", "4 ", "8 "]);