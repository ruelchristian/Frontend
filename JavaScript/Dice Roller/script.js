function RollDice() {
  const numOfDice = document.querySelector(`#numOfDice`).value;
  const diceResult = document.querySelector(`#diceResult`);
  const diceImg = document.querySelector(`#diceImg`);
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const random = Math.floor(Math.random() * 6) + 1;
    values.push(random);
    images.push(`<img src="Images/${random}.png">`);
  }
  diceResult.textContent = `Dice Results: ${values.join(`, `)}`;
  diceImg.innerHTML = images.join();
}
