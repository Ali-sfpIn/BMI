const height = document.querySelector(".height");
const mass = document.querySelector(".mass");
const button = document.querySelector(".calculate");
const form = document.querySelector("form");
const result = document.createElement("h4");
// CALCULATION OF THE BMI
const message = function (BMI, message) {
  result.textContent = `${BMI.toFixed(2)} ${message}`;
  form.insertAdjacentElement("beforeend", result);
};
button.addEventListener("click", function (e) {
  e.preventDefault();
  const getHeight = height.value / 100;
  const getMass = mass.value;
  const BMI = getMass / getHeight ** 2;
  if (getHeight < 2.5 && getMass < 150) {
    if (BMI < 18.5) {
      message(BMI, "alert! your BMI is on the underweight range");
    } else if (BMI >= 18.15 && BMI <= 24.9) {
      message(BMI, "yay!! you BMI is healthy");
    } else if (BMI >= 25 && BMI <= 29.9) {
      message(BMI, "your BMI is on the overweight range");
    } else if (BMI >= 30 && BMI < 60) {
      message(BMI, "alert! your BMI is so obese!");
    }
  } else {
    result.textContent = "your entered numbers are invalid";
    form.insertAdjacentElement("beforeend", result);
  }
  height.value = "";
  mass.value = "";
});
const resetResult = function () {
  result.textContent = "";
};
height.addEventListener("click", resetResult);
mass.addEventListener("click", resetResult);
