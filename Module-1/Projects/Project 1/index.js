const button = document.getElementById("change-btn");
const colorCodeText = document.getElementById("color-code");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return "#" + hex.padStart(6, "0");
}

button.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCodeText.textContent = newColor;
});
