function movieRating(input) {
    let numOfMovies = Number(input[0]);   
    let inputL = input.length;
    let totalGrade = 0;

    let highestMovieRating = Number.MIN_SAFE_INTEGER;
    let lowestMovieRating = Number.MAX_SAFE_INTEGER;
    let bestMovieName = "";
    let lorstMovieName = "";

    for (let i = 1; i < inputL; i++) {
        let movieName = input[i];
        i++;
        let movieGrade = Number(input[i]);
        totalGrade += movieGrade;

        if (highestMovieRating < movieGrade) {
            bestMovieName = movieName;
            highestMovieRating = movieGrade;
        }
        if (lowestMovieRating > movieGrade) {
            lorstMovieName = movieName;
            lowestMovieRating = movieGrade;
        }
    }
    console.log(`${bestMovieName} is with highest rating: ${highestMovieRating.toFixed(1)}`);
    console.log(`${lorstMovieName} is with lowest rating: ${lowestMovieRating.toFixed(1)}`);
    console.log(`Average rating: ${(totalGrade / numOfMovies).toFixed(1)}`);

};

movieRating(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"
]);