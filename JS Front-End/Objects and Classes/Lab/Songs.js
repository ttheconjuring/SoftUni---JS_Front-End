function print(inputArray) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  const songsCount = inputArray[0];

  let songsArray = [];
  for (let i = 0; i < songsCount; i++) {
    const [typeList, name, time] = inputArray[i + 1].split("_");
    songsArray.push(new Song(typeList, name, time));
  }

  const desiredTypeList = inputArray[inputArray.length - 1];

  if (desiredTypeList == "all") {
    songsArray.forEach((song) => {
      console.log(song.name);
    });
  } else {
    songsArray.forEach((song) => {
      if (song.typeList == desiredTypeList) {
        console.log(song.name);
      }
    });
  }
}
