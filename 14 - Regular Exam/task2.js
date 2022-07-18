function maidenParty(input) {
    let maidenPartyPrice = Number(input[0]);
    let loveWishes = Number(input[1]);
    let numRoses = Number(input[2]);
    let keychain = Number(input[3]);
    let cartoons = Number(input[4]);
    let surprises = Number(input[5]);

    let price = (loveWishes * 0.60) + (numRoses * 7.20) + (keychain * 3.60) + (cartoons * 18.20) + (surprises * 22.00);
    let numArticles = loveWishes + numRoses + keychain + cartoons + surprises;
    if (numArticles >= 25) {
        price *= 0.65;
    }
    let profit = price * 0.90;

    if (profit >= maidenPartyPrice) {
        console.log(`Yes! ${(profit - maidenPartyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(maidenPartyPrice - profit).toFixed(2)} lv needed.`);
    }
};

maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);