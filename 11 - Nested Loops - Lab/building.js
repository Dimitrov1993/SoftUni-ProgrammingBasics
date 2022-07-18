function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let f = floors; f > 0; f--) {
        let n = "";
        for (let r = 0; r < rooms; r++) {
            if (f === floors) {
                n += (`L${f}${r} `);
            } else if (f % 2 !== 0) {
                n += (`A${f}${r} `);
            } else if (f % 2 === 0) {
                n += (`O${f}${r} `);
            }
        }
        console.log(n);
    }
};

building(["4", "4"]);