const number = document.querySelector(`#number`);
const celsius = document.querySelector(`#celsius`);
const fahrenheit = document.querySelector(`#fahrenheit`);
const display = document.querySelector(`#display`);
const submit = document.querySelector(`#submit`);

submit.onclick = function () {
  let tempVal = parseFloat(number.value);

  if (fahrenheit.checked) {
    tempVal = (tempVal * 9) / 5 + 32;
    display.textContent = `${tempVal} °C`;
  } else if (celsius.checked) {
    tempVal = ((tempVal - 32) * 5) / 9;
    display.textContent = `${tempVal} °F`;
  } else {
    display.textContent = "Select a unit!";
  }
};
