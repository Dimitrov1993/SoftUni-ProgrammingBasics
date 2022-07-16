function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningDetergent = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let materials = (pens * 5.80) + (markers * 7.20) + (cleaningDetergent * 1.20);
    let finalePrice = materials - (materials * discount);

    console.log(finalePrice);

};

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);