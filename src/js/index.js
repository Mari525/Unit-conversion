const convertInput = document.getElementById("convert-input");
const convertBtn = document.getElementById("convert-btn");
const warning = document.getElementById("warning");
const clearBtn = document.getElementById("clear-btn");

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

if (localStorage.getItem("number")) {
  convertInput.value = localStorage.getItem("number");
}

convertBtn.addEventListener("click", function() {
  let value = convertInput.value;
  localStorage.setItem("number", value);
  if (!isNaN(value)) {
    warning.textContent = "";
    length.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value * 0.305).toFixed(3)} meters`;
    volume.textContent = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value * 3.785).toFixed(3)} liters`;
    mass.textContent = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value * 0.454).toFixed(3)} kilos`;
  }
  else {
    warning.textContent = "Please enter a number";
    length.textContent = "";
    volume.textContent = "";
    mass.textContent = "";
  }
})

clearBtn.addEventListener("click", function() {
  convertInput.value = "";
  length.textContent = "";
  volume.textContent = "";
  mass.textContent = "";
})