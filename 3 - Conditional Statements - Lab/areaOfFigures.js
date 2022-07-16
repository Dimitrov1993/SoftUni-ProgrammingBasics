function areaOfFigures(input) {
    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let result = 0;

    switch (type) {
        case "square": result = a * a; break;
        case "rectangle": result = a * b; break;
        case "circle": result = Math.PI * a * a; break;
        case "triangle": result = a * b / 2; break;
    }
    console.log(result.toFixed(3));
};

areaOfFigures(["circle", "6"]);



