function cleverLily(input) {
    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let oneToyPrice = Number(input[2]);
    let savings = 0;
    let toyCount = 0;
    let savingsIncrease = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savings += savingsIncrease;
            savingsIncrease += 10;
            savings--;
        } else {
            toyCount++;
        }
    }
    let totalSavings = savings + (toyCount * oneToyPrice);
    let diff = Math.abs(laundryPrice - totalSavings);

    if (totalSavings >= laundryPrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
};

cleverLily(["10", "170.00", "6"]);