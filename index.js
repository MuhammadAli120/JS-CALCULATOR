let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
const handleError = (value) => {
  try {
    return eval(value);
  } catch (err) {
    return "Syntax Error";
  }
};
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    let result = handleError(screen.value);
    if (buttonText === "x") {
      buttonText = "*";
    } else if (buttonText === "C") {
      screen.value = "";
    } else {
      if (screen.value !== "Syntax Error") {
        if (buttonText === "=") {
          screen.value = result;
        } else {
          screen.value += buttonText;
        }
      }
    }
  });
}
