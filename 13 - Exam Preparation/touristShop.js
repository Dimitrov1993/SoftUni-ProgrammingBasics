function touristShop(input) {
    let index = 0;
    let budget = input[index];
    index++;
    let command = input[index];
    index++;
    let productCount = 0;
    let totalPrice = 0;

    while (command !== "Stop") {
        let product = command;
        productCount++;
        let productPrice = Number(input[index]);
        index++;
        if (productCount % 3 === 0) {
            productPrice = productPrice / 2;
        }
        totalPrice += productPrice;

        if (totalPrice > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Stop") {
        console.log(`You bought ${productCount} products for ${totalPrice.toFixed(2)} leva.`);
    }

};

touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"]);