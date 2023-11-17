function print(inputArray) {
  const movies = [];
  inputArray.forEach((element) => {
    if (element.includes("addMovie")) {
      const name = element.split("addMovie ")[1];
      movies.push({ name });
    } else if (element.includes("directedBy")) {
      const [name, director] = element.split(" directedBy ");
      const match = movies.find((movie) => movie.name === name);
      if (match) {
        match["director"] = director;
      }
      /* const index = movieFound(name);
      if (index != -1) { 
        movies[index]["director"] = director;
      } */
    } else if (element.includes("onDate")) {
      const [name, date] = element.split(" onDate ");
      const match = movies.find((movie) => movie.name === name);
      if (match) {
        match["date"] = date;
      }
      /* const index = movieFound(name);
      if (index != -1) {
        movies[index]["date"] = date;
      } */
    }
  });
  movies.forEach((movie) => {
    if (movie.name != undefined) {
      if (movie.director != undefined) {
        if (movie.date != undefined) {
          console.log(JSON.stringify(movie));
        }
      }
    }
  });

  /* function movieFound(name) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].name == name) {
        return i;
      }
    }
    return -1;
  } */
}
