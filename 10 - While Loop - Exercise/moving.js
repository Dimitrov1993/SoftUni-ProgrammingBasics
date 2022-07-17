function moving(input) {
    let index = 0;
    let freeSpceWidth = Number(input[index]);
    index++;
    let freeSpaceLength = Number(input[index]);
    index++;
    let freeSpaceHeight = Number(input[index]);
    index++;
    let totalFreeSpace = freeSpceWidth * freeSpaceLength * freeSpaceHeight;
    let totalBoxes = 0;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let boxes = Number(command);
        totalBoxes += boxes;

        if (totalBoxes > totalFreeSpace) {
            console.log(`No more free space! You need ${totalBoxes - totalFreeSpace} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Done") {
        console.log(`${totalFreeSpace - totalBoxes} Cubic meters left.`);
    }
};

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);