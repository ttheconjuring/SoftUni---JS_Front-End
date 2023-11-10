function validate(password) {
  let hasValidLength = false;
  if (password.length >= 6 && password.length <= 10) {
    hasValidLength = true;
  } else {
    console.log(`Password must be between 6 and 10 characters`);
  }
  let hasValidCharacters = false;
  if (/^[a-zA-Z0-9]+$/.test(password)) {
    hasValidCharacters = true;
  } else {
    console.log(`Password must consist only of letters and digits`);
  }
  let containsAtLeastTwoDigits = false;
  if ((password.match(/\d/g) || []).length >= 2) {
    containsAtLeastTwoDigits = true;
  } else {
    console.log(`Password must have at least 2 digits`);
  }
  if (hasValidLength && hasValidCharacters && containsAtLeastTwoDigits) {
    console.log(`Password is valid`);
  }
}
