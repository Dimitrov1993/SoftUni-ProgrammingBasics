function projectsCreation(input) {

    let name = input[0];
    let numProjects = Number(input[1]);
    let hoursNeeded = numProjects * 3;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${numProjects} project/s.`);
}

projectsCreation(["George ", "4 "]);
