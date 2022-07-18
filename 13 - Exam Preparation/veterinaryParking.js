function veterinaryParking(input) {
    let numOfDays = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let parkingTaxPerHour = 0;
    let sumForTheDay = 0;
    let totalSum = 0;

    for (let d = 1; d <= numOfDays; d++) {
        sumForTheDay = 0;
        for (let h = 1; h <= hoursPerDay; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                parkingTaxPerHour = 2.50;
            } else if (d % 2 !== 0 && h % 2 === 0) {
                parkingTaxPerHour = 1.25;
            } else {
                parkingTaxPerHour = 1;
            }
            sumForTheDay += parkingTaxPerHour;
            totalSum += parkingTaxPerHour;

        }
        console.log(`Day: ${d} - ${sumForTheDay.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
};

veterinaryParking(["2", "5"]);