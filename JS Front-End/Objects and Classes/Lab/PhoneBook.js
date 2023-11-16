function print(inputArray) {
  const phoneBook = {};
  inputArray.forEach((element) => {
    const [name, phone] = element.split(" ");
    phoneBook[name] = phone;
  });
  Object.entries(phoneBook).forEach((entry) => {
    const [name, phone] = entry;
    console.log(name + " -> " + phone);
  });
}
