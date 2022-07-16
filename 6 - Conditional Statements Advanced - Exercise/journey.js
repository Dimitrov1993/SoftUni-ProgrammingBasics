function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                destination = "Bulgaria";
                type = "Camp";
                price = budget * 0.30;
            } else if (budget > 100 && budget <= 1000) {
                destination = "Balkans";
                type = "Camp";
                price = budget * 0.40;
            } else if (budget > 1000) {
                destination = "Europe";
                type = "Hotel";
                price = budget * 0.90;
            }
            break;
        case "winter":
            type = "Hotel";
            if (budget <= 100) {
                destination = "Bulgaria";
                price = budget * 0.70;
            } else if (budget > 100 && budget <= 1000) {
                destination = "Balkans";
                price = budget * 0.80;
            } else if (budget > 1000) {
                destination = "Europe";
                price = budget * 0.90;
            }
            break;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
};

journey(["50", "summer"]);