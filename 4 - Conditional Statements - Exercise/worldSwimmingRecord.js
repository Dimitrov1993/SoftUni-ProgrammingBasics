function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distance = Number(input[1]);
    let timeSpeed = Number(input[2]);

    let time = distance * timeSpeed;
    let resistance = Math.floor(distance / 15) * 12.5;
    totalTime = time + resistance;

    if (recordInSec > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);
    }
};

worldSwimmingRecord(["55555.67", "3017", "5.03"]);