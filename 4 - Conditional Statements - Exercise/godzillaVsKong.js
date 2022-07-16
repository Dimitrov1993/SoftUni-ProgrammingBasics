function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistsNum = Number(input[1]);
    let clothingPerStat = Number(input[2]);

    let decor = budget * 0.10;
    let clothingPrice = statistsNum * clothingPerStat;

    if (statistsNum > 150) {
        clothingPrice *= 0.90;
    }
    totalPrice = decor + clothingPrice;

    if (budget >= totalPrice) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
};

godzillaVsKong(["9587.88", "222", "55.68"]);