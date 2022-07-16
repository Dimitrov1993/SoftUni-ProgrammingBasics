function vacationBooksList(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numOfDays = Number(input[2]);
    let result = (totalPages / pagesPerHour) / numOfDays;
    console.log(Math.floor(result));
};

vacationBooksList(["432 ","15 ","4 "]);