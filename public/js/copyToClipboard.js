function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(successAlert, errorCallback);
}

function successAlert() {
  const audio = new Audio('../sounds/success-sound.mp3');
  audio.play();
  setTimeout(() => alert("Text was copied to clipboard successfully."), 100);
}

function errorAlert(err) {
  const audio = new Audio('../sounds/failure-sound.mp3');
  audio.play();
  setTimeout(() => alert(`Could not copy text: ${err}`), 100);
}