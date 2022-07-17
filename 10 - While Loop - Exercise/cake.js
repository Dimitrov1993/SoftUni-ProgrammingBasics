function cake(input) {
    let index = 0;
    let cakeLength = Number(input[index]);
    index++;
    let cakeWidth = Number(input[index]);
    index++;
    let numOfCakePieces = cakeLength * cakeWidth;

    let command = input[index];
    index++;

    while (command !== "STOP") {
        let pieceTaken = Number(command);
        numOfCakePieces -= pieceTaken;

        if (numOfCakePieces < 0) {
            let diff = Math.abs(numOfCakePieces);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "STOP") {
        console.log(`${numOfCakePieces} pieces are left.`);
    }

};

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "31"]);