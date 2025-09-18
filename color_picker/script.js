const colorPicker = document.getElementById("colorPicker");
const colorPreview = document.getElementById("colorPreview");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyButtons = document.querySelectorAll(".copy-btn");

// Convert HEX to RGB
function hexToRgb(hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

// Update preview and values when picking a color
colorPicker.addEventListener("input", () => {
  let hex = colorPicker.value;
  let rgb = hexToRgb(hex);

  colorPreview.style.backgroundColor = hex;
  hexValue.textContent = hex;
  rgbValue.textContent = rgb;
});

// Copy function
copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const textToCopy = document.getElementById(targetId).textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1000);
    });
  });
});
