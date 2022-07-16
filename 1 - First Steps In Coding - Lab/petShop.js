function petShop(input) {
    
    let numDogFood = Number(input[0]);
    let numCatFood = Number(input[1]);
    let finalePrice = (numDogFood * 2.50) + (numCatFood * 4.00);

    console.log(`${finalePrice} lv.`);
};

petShop(["5", "4"]);