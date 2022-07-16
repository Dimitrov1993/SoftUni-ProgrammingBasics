function toyShop(input) {
    let tourPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toyPrice = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let toyNum = puzzles + dolls + bears + minions + trucks;

    if (toyNum >= 50) {
        toyPrice *= 0.75;
    }
    let rent = toyPrice * 0.10;
    let profit = toyPrice - rent;

    if (profit >= tourPrice) {
        console.log(`Yes! ${(profit - tourPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tourPrice - profit).toFixed(2)} lv needed.`);
    }
};

toyShop(["320", "8", "2", "5", "5", "1"]);