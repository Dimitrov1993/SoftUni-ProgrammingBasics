function movieRevenue(input) {
    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaTax = Number(input[4]) / 100;

    let profit = (tickets * ticketPrice) * days;
    let tax = profit * cinemaTax;
    let movieProfit = profit - tax;

    console.log(`The profit from the movie ${movieName} is ${movieProfit.toFixed(2)} lv.`);

};

movieRevenue(["The Programmer", "20", "500", "7.50", "7"]);