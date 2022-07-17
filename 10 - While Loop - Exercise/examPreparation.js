function examPreparation(input) {

    let index = 0;
    let allowedPoorGrades = Number(input[index]);
    index++;
    let problemName = input[index];
    index++;
    let problemGrade = Number(input[index]);

    let avgScore = 0;
    let problemCount = 0;
    let lastProblem = problemName;
    let sumGrades = 0;
    let poorGradesCounter = 0;

    while (problemName !== "Enough") {

        sumGrades += problemGrade;

        if (problemGrade <= 4) {
            poorGradesCounter++;
        }
        if (poorGradesCounter >= allowedPoorGrades) {

            console.log(`You need a break, ${poorGradesCounter} poor grades.`);
            break;
        }

        problemCount++;

        lastProblem = problemName;
        index++;
        problemName = input[index];
        index++;
        problemGrade = Number(input[index]);
    }
    if (problemName === "Enough") {
        avgScore = sumGrades / problemCount;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
};

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);