function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => console.log("Text was copied to clipboard successfully."), (err) => console.error("Could not copy text:", err));
}