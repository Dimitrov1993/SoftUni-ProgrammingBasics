function excursionSale(input) {
    let numSeaTrip = Number(input[0]);
    let numMountainTrip = Number(input[1]);
    let index = 2;
    let commant = input[index];
    let profit = 0;
    let totalTrips = numSeaTrip + numMountainTrip;

    while (commant !== "Stop") {
        let type = input[index];
        if (type === "sea") {
            if (numSeaTrip <= 0) {
                profit += 0;
            } else {
                profit += 680;
                totalTrips--;
            }
            numSeaTrip--;

        } else if (type === "mountain") {
            if (numMountainTrip <= 0) {
                profit += 0;
            } else {
                profit += 499;
                totalTrips--;
            }
            numMountainTrip--;
        }

        if (totalTrips <= 0) {
            console.log("Good job! Everything is sold.");
            break;
        }
        commant = input[index];
        index++;
    }
    console.log(`Profit: ${profit} leva.`);

};

excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"]);