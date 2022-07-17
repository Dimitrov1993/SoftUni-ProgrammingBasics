function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let i = 1;
    let isExcluded = false;
    let minGradeCount = 0;
    let sumGrade = 0;
    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            minGradeCount++;
            if (minGradeCount === 2) {
                isExcluded = true;
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;
    }
    if (isExcluded) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else {
        let avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
};

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);