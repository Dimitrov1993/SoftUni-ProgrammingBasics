function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let studioPrice = 0;
    let apartmenPrice = 0;

    switch (month) {
        case "May":
        case "October": studioPrice = 50; apartmenPrice = 65;
            if (numberOfNights > 7 && numberOfNights < 14) {
                studioPrice *= 0.95;
            } else if (numberOfNights > 14) {
                studioPrice *= 0.70;
                apartmenPrice *= 0.90;
            }
            break;
        case "June":
        case "September": studioPrice = 75.20; apartmenPrice = 68.70;
            if (numberOfNights > 14) {
                studioPrice *= 0.80;
                apartmenPrice *= 0.90;
            }
            break;
        case "July":
        case "August": studioPrice = 76; apartmenPrice = 77;
            if (numberOfNights > 14) {
                apartmenPrice *= 0.90;
            }
            break;
    }


    console.log(`Apartment: ${(numberOfNights * apartmenPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(numberOfNights * studioPrice).toFixed(2)} lv.`);
};

hotelRoom(["May", "15"]);