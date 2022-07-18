function catDiet(input) {
    let percentFats = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbohydrates = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWater = Number(input[4]);

    let fats = (totalCalories * percentFats / 100) / 9;
    let proteins = (totalCalories * percentProtein / 100) / 4;
    let carbohydrates = (totalCalories * percentCarbohydrates / 100) / 4;
    let foodWeight = fats + proteins + carbohydrates;

    let caloriesPerGram = totalCalories / foodWeight;

    let calories = caloriesPerGram * percentWater / 100;

    let finaleCalories = caloriesPerGram - calories

    console.log(finaleCalories.toFixed(4));
};

catDiet(["60",
    "25",
    "15",
    "2500",
    "60"]);