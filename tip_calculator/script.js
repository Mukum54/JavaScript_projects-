const billAmount = document.getElementById("billAmount");
const tipPercent = document.getElementById("tipPercent");
const numPeople = document.getElementById("numPeople");
const calculateBtn = document.getElementById("calculateBtn");

const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const eachPerson = document.getElementById("eachPerson");

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billAmount.value);
  const tip = parseFloat(tipPercent.value);
  const people = parseInt(numPeople.value);

  if (isNaN(bill) || bill <= 0 || isNaN(tip) || tip < 0 || isNaN(people) || people <= 0) {
    alert("⚠️ Please enter valid numbers!");
    return;
  }

  const tipValue = (bill * tip) / 100;
  const total = bill + tipValue;
  const perPerson = total / people;

  tipAmount.textContent = tipValue.toFixed(2);
  totalAmount.textContent = total.toFixed(2);
  eachPerson.textContent = perPerson.toFixed(2);
});
