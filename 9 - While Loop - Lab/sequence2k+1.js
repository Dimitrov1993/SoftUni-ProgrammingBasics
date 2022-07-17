function sequence(input) {
    let n = input[0];

    let currentNumber = 1;

    while (currentNumber <= n) {
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;
    }
};

sequence(["3"]);