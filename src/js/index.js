let convertInput = document.getElementById("convert-input");
let convertBtn = document.getElementById("convert-btn");
let warning = document.getElementById("warning");

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

let themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
  // let theme = document.querySelectorAll(conversion);
  // let u = document.querySelector(".conversion");
  // u.classList.add('conversion--light');
  // console.log(document.querySelector(".conversion"));
  if (document.querySelector(".conversion").classList.contains("light")) {
    document.querySelector(".conversion").classList.remove("light");
  }
  else {
    // document.querySelector(".conversion").querySelectorAll('*').classList.add("light");
    document.querySelector(".conversion").classList.add("light");
  }
})

convertBtn.addEventListener("click", function() {
  let value = convertInput.value;
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