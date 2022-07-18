function multiplyTable(input) {
    let index = 0;
    let num = input[index];
    let num1 = num[2];
    let num2 = num[1];
    let num3 = num[0];

    for (let a = 1; a <= num1; a++) {
        for (let b = 1; b <= num2; b++) {
            for (let c = 1; c <= num3; c++) {
                console.log(`${a} * ${b} * ${c} = ${a * b * c};`);
            }
        }
    }   
};

multiplyTable(["222"]);