function depositCalculator(input) {
    let deposit = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let interestRate = Number(input[2]) / 100;
    let result = deposit + depositPeriod * ((deposit * interestRate) / 12);
    console.log(result);
};

depositCalculator(["200 ", "3 ", "5.7 "]);