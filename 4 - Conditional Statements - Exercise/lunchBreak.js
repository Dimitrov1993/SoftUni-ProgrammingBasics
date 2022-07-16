function lunchBreak(input) {
    let name = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength * 1 / 8;
    let restTime = breakLength * 1 / 4;
    let timeLeft = breakLength - lunchTime - restTime;

    if (timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeLength - timeLeft)} more minutes.`);
    }
};

lunchBreak(["Teen Wolf", "48", "60"]);