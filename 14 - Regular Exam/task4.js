function grandpaStavri(input) {
    let days = Number(input[0]);
    let index = 1;
    let totalRakiq = 0;
    let totalDegreesPerLiter = 0;

    for (let i = 1; i <= days; i++) {
        let rakiq = Number(input[index++]);
        totalRakiq += rakiq;
        let degrees = Number(input[index]);
        let degreesPerLiter = rakiq * degrees;
        totalDegreesPerLiter += degreesPerLiter;
        index++;
    }
    let finaleDegrees = totalDegreesPerLiter / totalRakiq;

    console.log(`Liter: ${totalRakiq.toFixed(2)}`);
    console.log(`Degrees: ${finaleDegrees.toFixed(2)}`);

    if (finaleDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (finaleDegrees >= 38 && finaleDegrees < 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
};

grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"]);