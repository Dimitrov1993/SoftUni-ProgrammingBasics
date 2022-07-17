function tennisRanklist(input) {
    let index = 0;
    let tournamentsIn = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let points = 0;
    let winsCount = 0;

    for (let i = 0; i < tournamentsIn; i++) {
        let stage = input[index];
        index++;

        switch (stage) {
            case "W": points += 2000;
                winsCount++;
                break;
            case "F": points += 1200;
                break;
            case "SF": points += 720;
                break;
        }
    }
    let totalPoints = startingPoints + points;
    console.log(`Final points: ${totalPoints}`);
    let avgPoints = Math.floor(points / tournamentsIn);
    console.log(`Average points: ${avgPoints}`);
    let winPercentage = winsCount / tournamentsIn * 100;
    console.log(`${winPercentage.toFixed(2)}%`);
};

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);