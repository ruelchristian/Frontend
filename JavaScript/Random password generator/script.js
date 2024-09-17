const allowedChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`!@#$%^&*()_+-=";
const passwordLength = 15;

let password = "";

for (let i = 0; i < passwordLength; i++) {
  const pass = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars[pass];
}
console.log(password);

console.log(typeof password);
