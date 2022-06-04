let threeDotsEl = document.getElementById("threeDots-el");
let threeDotsEl2 = document.getElementById("threeDots-el2");
let threeDotsEl3 = document.getElementById("threeDots-el3");
let threeDotsEl4 = document.getElementById("threeDots-el4");

let password1EL = document.getElementById("password1-el");
let password2EL = document.getElementById("password2-el");
let password3EL = document.getElementById("password3-el");
let password4EL = document.getElementById("password4-el");

let copiedEl = document.getElementById("copied-el");
let lengthEl = document.getElementById("length-el");
let lockEl = document.getElementById("lock-el");
const threeDotsEL = document.querySelectorAll(".threeDots");
const passwordBoxes = document.querySelectorAll(".password-box");
let generatedPasswords = false;

let AllChars = [];
// let specialCharacters = [];
// let numbers = [];
// let alphabets = [];
for (let i = 33; i < 127; i++) {
  AllChars.push(String.fromCharCode(i));
}

function generatePassword() {
  copiedEl.textContent = "";
  lengthEl.value = lengthEl.value ? lengthEl.value : 6;
  if (lengthEl.value < 3 || lengthEl.value > 50) {
    copiedEl.style.display = "block";
    copiedEl.textContent =
      "Password length should be greater than 2 and less than 50";
    if (generatedPasswords) {
      clearPasswordValue();
    }
  } else {
    removeDots();
    lockEl.classList.toggle("increaseSize");
    setTimeout(() => {
      lockEl.classList.toggle("increaseSize");
    }, 800);
    setTimeout(() => {
      showPasswordValue();
      generatedPasswords = true;
    }, 1250);
  }
}

function createPassword(passowrdLength = 6) {
  let result = "";
  passowrdLength = lengthEl.value;
  for (let i = 0; i < passowrdLength; i++) {
    result += AllChars[Math.floor(Math.random() * AllChars.length)];
  }
  return result;
}

function removeDots() {
  for (let element of threeDotsEL) {
    element.classList.add("animated", "fadeOut");
  }
  setTimeout(() => {
    threeDotsEl.style.display = "none";
    threeDotsEl2.style.display = "none";
    threeDotsEl3.style.display = "none";
    threeDotsEl4.style.display = "none";
  }, 1250);
}

function showPasswordValue() {
  password1EL.textContent = createPassword();
  password2EL.textContent = createPassword();
  password3EL.textContent = createPassword();
  password4EL.textContent = createPassword();
}
function clearPasswordValue() {
  password1EL.textContent = "";
  password2EL.textContent = "";
  password3EL.textContent = "";
  password4EL.textContent = "";
}

function copyPassword(value) {
  copiedEl.style.display = "block";
  copiedEl.classList.add("animated", "fadeOut");
  if (!generatedPasswords) {
    copiedEl.textContent = "Generate passwords first";
  } else {
    if (value === 1) {
      navigator.clipboard.writeText(password1EL.textContent);
      copiedEl.textContent = "Copied the password:  " + password1EL.textContent;
    } else if (value === 2) {
      navigator.clipboard.writeText(password2EL.textContent);
      copiedEl.textContent = "Copied the password:  " + password2EL.textContent;
    } else if (value === 3) {
      navigator.clipboard.writeText(password3EL.textContent);
      copiedEl.textContent = "Copied the password:  " + password3EL.textContent;
    } else if (value === 4) {
      navigator.clipboard.writeText(password4EL.textContent);
      copiedEl.textContent = "Copied the password:  " + password4EL.textContent;
    }
  }
  setTimeout(() => {
    copiedEl.classList.remove("animated", "fadeOut");
    copiedEl.style.display = "none";
  }, 2000);
}

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function delayedGreeting() {
//   console.log("Hello");
//   await sleep(2000);
//   console.log("World!");
//   await sleep(2000);
//   console.log("Goodbye!");
// }

// delayedGreeting();
