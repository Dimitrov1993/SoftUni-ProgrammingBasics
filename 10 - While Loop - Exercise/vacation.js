function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[0]);
    index++;
    let moneyHave = Number(input[1]);
    index++;

    let dayCounter = 0;
    let spendCounter = 0;
    let isSaveMoney = true;

    while (moneyHave < moneyNeeded) {
        dayCounter++;
        let type = input[index];
        index++;
        let sum = Number(input[index]);
        index++;

        if (type === "save") {
            spendCounter = 0;
            moneyHave += sum;
        } else {
            spendCounter++;
            moneyHave -= sum;
            if (moneyHave < 0) {
                moneyHave = 0;
            }
        }

        if (spendCounter === 5) {
            console.log("You can't save the money.");
            console.log(`${dayCounter}`);
            isSaveMoney = false;
            break;
        }
    }

    if (isSaveMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
};

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);