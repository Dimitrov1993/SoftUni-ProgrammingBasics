function newHouse(input) {
    let type = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);
    let result = 0;

    switch (type) {
        case "Roses":
            result = num * 5;
            if (num > 80) {
                result *= 0.90;
            }
            break;
        case "Dahlias":
            result = num * 3.80;
            if (num > 90) {
                result *= 0.85;
            }
            break;
        case "Tulips":
            result = num * 2.80;
            if (num > 80) {
                result *= 0.85;
            }
            break;
        case "Narcissus":
            result = num * 3;
            if (num < 120) {
                result *= 1.15;
            }
            break;
        case "Gladiolus":
            result = num * 2.50;
            if (num < 80) {
                result *= 1.20;
            }
            break;
    }
    if (budget >= result) {
        console.log(`Hey, you have a great garden with ${num} ${type} and ${(budget - result).toFixed(2)} leva left. `);
    } else {
        console.log(`Not enough money, you need ${(result - budget).toFixed(2)} leva more.`);
    }
};

newHouse(["Tulips","88","260"]);