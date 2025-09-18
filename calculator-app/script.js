const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "0";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      if (currentInput === "0" || currentInput === "Error") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    display.textContent = currentInput;
  });
});
