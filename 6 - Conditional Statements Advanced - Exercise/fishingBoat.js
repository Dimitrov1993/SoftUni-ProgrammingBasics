function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishmans = Number(input[2]);
    let result = 0;
    let rent = 0;

    switch (season) {
        case "Spring":
            rent = 3000;
            if (fishmans <= 6) {
                result = rent * 0.90;
            } else if (fishmans > 6 && fishmans <= 11) {
                result = rent * 0.85;
            } else {
                result = rent * 0.75;
            }
            break;

        case "Winter":
            rent = 2600;
            if (fishmans <= 6) {
                result = rent * 0.90;
            } else if (fishmans > 6 && fishmans <= 11) {
                result = rent * 0.85;
            } else {
                result = rent * 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            rent = 4200;
            if (fishmans <= 6) {
                result = rent * 0.90;
            } else if (fishmans > 6 && fishmans <= 11) {
                result = rent * 0.85;
            } else {
                result = rent * 0.75;
            }
            break;
    }
    if (fishmans % 2 === 0 && season !== "Autumn") {
        result *= 0.95;
    }

    if (budget >= result) {
        console.log(`Yes! You have ${(budget - result).toFixed(2)} leva left.`);
    } else if (result > budget) {
        console.log(`Not enough money! You need ${(result - budget).toFixed(2)} leva.`);
    }
};

fishingBoat(["3600", "Autumn", "6"]);