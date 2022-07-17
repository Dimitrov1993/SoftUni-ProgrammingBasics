function trekkingMania(input) {
    let groupsNum = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let totalPeople = 0;

    for (let i = 1; i <= groupsNum; i++) {
        let currentNumber = Number(input[i]);
        totalPeople += currentNumber;
        if (currentNumber <= 5) {
            musala += currentNumber;
        } else if (currentNumber > 5 && currentNumber <= 12) {
            monblan += currentNumber;
        } else if (currentNumber > 12 && currentNumber <= 25) {
            kilimandjaro += currentNumber;
        } else if (currentNumber > 25 && currentNumber <= 40) {
            k2 += currentNumber;
        } else if (currentNumber > 40) {
            everest += currentNumber;
        }
    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
};

trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);