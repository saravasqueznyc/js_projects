"use strict";

const rateUSD = {
  USD: 1,
  EUR: 0.9,
  COP: 4100,
  MXN: 18.0,
  ARS: 980,
  BRL: 5.6,
  GBP: 0.78,
  JPY: 151.0,
};

let amount = document.getElementById("amount");
let fromCurrency = document.querySelector("#from");
let toCurrency = document.getElementById("to");
let decimals = document.getElementById("decimals");
let resultFrom = document.querySelector("#from-amount");
let resultTo = document.querySelector("#to-amount");
let convertButton = document.querySelector("#convert");
let swapButton = document.querySelector("#swap");
let rateText = document.querySelector("#rate");

console.log(convertButton);

convertButton.addEventListener("click", () => {
  const amountValue = amount.value;
  const fromValue = fromCurrency.value;
  const toValue = toCurrency.value;
  const decimalsValue = decimals.value;

  console.log(fromValue);
  console.log(toValue);

  let rate = (rateUSD[toValue] / rateUSD[fromValue]).toFixed(4);
  rateText.innerText = "1 " + fromValue + " = " + rate + " " + toValue;

  resultFrom.innerText = Number(amountValue).toFixed(decimalsValue);
  resultTo.innerText = (Number(amountValue) * rate).toFixed(decimalsValue);
});

swapButton.addEventListener("click", () => {
  let temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
});