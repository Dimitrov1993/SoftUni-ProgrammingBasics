function osckars(input) {
    let index = 0;
    let actName = input[index];
    index++;
    let actPoints = Number(input[index]);
    index++;
    let judjes = input[index];
    index++;
    let newPoints = 0;

    for (let i = 1; i <= judjes; i++) {
        let jujName = input[index];
        index++;
        let jujPoints = input[index];
        index++
        let nameLenght = jujName.length;
        newPoints = (nameLenght * jujPoints) / 2;
        actPoints += Number(newPoints);
        if (actPoints >= 1250.5) {
            console.log(`Congratulations, ${actName} got a nominee for leading role with ${actPoints.toFixed(1)}!`);
            break;
        }
    }
    let diff = Math.abs(actPoints - 1250.5);
    if (actPoints < 1250.5) {
        console.log(`Sorry, ${actName} you need ${diff.toFixed(1)} more!`);
    }
};

osckars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);