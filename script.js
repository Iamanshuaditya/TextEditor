const inputTextarea = document.getElementById("input-text");
const outputTextarea = document.getElementById("formatted-text");
inputTextarea.addEventListener("input", function () {
  const inputValue = inputTextarea.value;
  outputTextarea.value = inputValue;
});

function makeBold() {
  const boldButton = document.getElementById("bold");
  boldButton.classList.toggle("active");
  outputTextarea.classList.toggle("bold");
}

function makeItalic() {
  const ItalicButton = document.getElementById("italic");
  ItalicButton.classList.toggle("active");
  outputTextarea.classList.toggle("italic");
}

function makeUnderline() {
  const UnderlineButton = document.getElementById("underline");
  UnderlineButton.classList.toggle("active");
  outputTextarea.classList.toggle("underline");
}

function makeStrike() {
  const Strike = document.getElementById("line-through");
  Strike.classList.toggle("active");
  outputTextarea.classList.toggle("strike");
}

function alignText(align) {
  const outputTextarea = document.getElementById("formatted-text");
  outputTextarea.style.textAlign = align;
}

function leftAlign() {
  alignText("left");
}

function rightAlign() {
  alignText("right");
}

function centerAlign() {
  alignText("center");
}

const downloadFile = () => {
  const link = document.createElement("a");
  const content = outputTextarea.value;

  const file = new Blob([content], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = "File.txt";
  link.click();
  URL.revokeObjectURL(link.href);
};
