function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let frameMemory = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let processorsPrice = (videoCardsPrice * 0.35) * processors;
    let frameMemoryPrice = (videoCardsPrice * 0.10) * frameMemory;

    let totalPrice = videoCardsPrice + processorsPrice + frameMemoryPrice;

    if (videoCards > processors) {
        totalPrice *= 0.85;
    }
    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
};

shopping(["920.45","3","1","1"]);