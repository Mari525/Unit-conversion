let convertInput = document.getElementById("convert-input");
let convertBtn = document.getElementById("convert-btn");
let warning = document.getElementById("warning");

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

convertBtn.addEventListener("click", function() {
  let value = convertInput.value;
  if (!isNaN(value)) {
    length.textContent = `${value} meters = ${value * 3.281} feet | ${value} feet = ${value * 0.305} meters`;
    volume.textContent = `${value} liters = ${value * 0.264} gallons | ${value} gallons = ${value * 3.785} liters`;
    mass.textContent = `${value} kilos = ${value * 2.204} pounds | ${value} pounds = ${value * 0.454} kilos`;
  }
  else {
    warning.textContent = "Please enter a number";
  }
})