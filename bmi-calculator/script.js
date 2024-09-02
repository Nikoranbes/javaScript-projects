const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const results = document.querySelector("#results");
  const suggestion = document.querySelector("#suggestion");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 19) {
      suggestion.innerHTML = `You are underweight: ${bmi}`;
    }
    if (bmi >= 19 && bmi < 25) {
      suggestion.innerHTML = `You are normal weight: ${bmi}`;
    }
    if (bmi > 25) {
      suggestion.innerHTML = `You are overweight ${bmi}`;
    }
  }
});
