function familyTrip(input) {
    let budget = Number(input[0]);
    let nightsNum = Number(input[1]);
    let nightPrice = Number(input[2]);
    let purcentAdditionalCosts = Number(input[3]) / 100;

    if (nightsNum > 7) {
        nightPrice *= 0.95;
    }
    let additionalCosts = budget * purcentAdditionalCosts;
    let finalePrice = (nightsNum * nightPrice) + additionalCosts;

    if (budget >= finalePrice) {
        console.log(`Ivanovi will be left with ${(budget - finalePrice).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(finalePrice - budget).toFixed(2)} leva needed.`);
    }
};

familyTrip(["800.50", "8", "100", "2"]);