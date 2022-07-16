function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let finalePrice = 0;

    switch (type) {
        case "room for one person":
            finalePrice = (days - 1) * 18.00;
            break;
        case "apartment":
            finalePrice = (days - 1) * 25.00;
            if (days < 10) {
                finalePrice *= 0.70;
            } else if (days >= 10 && days <= 15) {
                finalePrice *= 0.65;
            } else if (days > 15) {
                finalePrice *= 0.50;
            }
            break;
        case "president apartment":
            finalePrice = (days - 1) * 35.00;
            if (days < 10) {
                finalePrice *= 0.90;
            } else if (days >= 10 && days <= 15) {
                finalePrice *= 0.85;
            } else if (days > 15) {
                finalePrice *= 0.80;
            }
            break;
    }
    if (grade === "positive") {
        finalePrice *= 1.25;
    } else {
        finalePrice *= 0.90;
    }
    console.log(finalePrice.toFixed(2));
};

skiTrip(["30", "president apartment", "negative"]);
