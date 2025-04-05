const convertBtn = document.getElementById("convert-btn");
let inputNum = document.getElementById("input-num");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const metersToFeet = 3.281;
const litersToGallons = 0.264;
const kilogramsToPound = 2.204;

convertBtn.addEventListener("click", function () {
  lengthConvert();
  volumeConvert();
  massConvert();
  inputNum.value = 0;
  console.log("clicked");
});

function lengthConvert() {
  let baseValue = inputNum.value;
  lengthEl.textContent = `${baseValue} Meters = ${(
    baseValue * metersToFeet
  ).toFixed(3)} Feet |
     ${baseValue} Feet = ${(baseValue / metersToFeet).toFixed(3)} Meters`;
}

function volumeConvert() {
  let baseValue = inputNum.value;
  volumeEl.textContent = `${baseValue} Liters = ${(
    baseValue * litersToGallons
  ).toFixed(3)} Gallons |
     ${baseValue} Gallons = ${(baseValue / litersToGallons).toFixed(3)} Liters`;
}

function massConvert() {
  let baseValue = inputNum.value;
  massEl.textContent = `${baseValue} Kilograms = ${(
    baseValue * kilogramsToPound
  ).toFixed(3)} Pounds |
     ${baseValue} Pounds = ${(baseValue / kilogramsToPound).toFixed(
    3
  )} Kilograms`;
}
