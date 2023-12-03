function encodeAndDecodeMessages() {
  const buttons = Array.from(document.getElementsByTagName("button"));
  const firstTextArea = document.querySelector(
    "#main div:first-child textarea"
  );
  const encondeAndSendIt = buttons[0];
  const secondTextArea = document.querySelector(
    "#main div:last-child textarea"
  );
  const decodeAndReadIt = buttons[1];

  encondeAndSendIt.addEventListener("click", encodeAndSend);
  decodeAndReadIt.addEventListener("click", decodeAndRead);

  function encodeAndSend() {
    const messageToEncode = firstTextArea.value;
    const arrayOfCharacters = messageToEncode.split("");
    const n = messageToEncode.length;
    let encodedMessage = "";
    for (let i = 0; i < n; i++) {
      const currentCharacter = arrayOfCharacters[i];
      const asciiCode = currentCharacter.charCodeAt(0);
      const newAsciiCode = asciiCode + 1;
      const newCharacter = String.fromCharCode(newAsciiCode);
      encodedMessage += newCharacter;
    }
    secondTextArea.value = encodedMessage;
    firstTextArea.value = "";
  }

  function decodeAndRead() {
    const encodedMessage = secondTextArea.value;
    const arrayOfCharacters = encodedMessage.split("");
    const n = encodedMessage.length;
    let decodedMessage = "";
    for (let i = 0; i < n; i++) {
      const currentCharacter = arrayOfCharacters[i];
      const asciiCode = currentCharacter.charCodeAt(0);
      const newAsciiCode = asciiCode - 1;
      const newCharacter = String.fromCharCode(newAsciiCode);
      decodedMessage += newCharacter;
    }
    secondTextArea.value = decodedMessage;
  }
}
