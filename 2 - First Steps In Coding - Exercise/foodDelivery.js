function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetarian = Number(input[2]);
    let menuPrice = (chicken * 10.35) + (fish * 12.40) + (vegetarian * 8.15);
    let dessert = menuPrice * 0.20;
    let finalePrice = menuPrice + dessert + 2.50;

    console.log(finalePrice);
};

foodDelivery(["2 ", "4 ", "3 "]);