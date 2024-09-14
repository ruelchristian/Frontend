const number = document.getElementById("number-count");
const decrease = document.getElementById(`decreaseBTN`);
const increase = document.getElementById("increaseBTN");
const reset = document.getElementById("resetBTN");

let count = 0;

increase.onclick = function () {
  count++;
  number.textContent = count;
};
decrease.onclick = function () {
  count--;
  number.textContent = count;
};
reset.onclick = function () {
  number.textContent = count = 0;
};
