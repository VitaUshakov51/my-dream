const inputOne = document.getElementById("input1");
const inputTwo = document.getElementById("input2");
const result = document.getElementById("result");
const buttonSubmit = document.getElementById("submit");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
let action = "";

plus.onclick = function () {
  action = "+";
};
minus.onclick = function () {
  action = "-";
};
multiplication.onclick = function () {
  action = "*";
};
division.onclick = function () {
  action = "/";
};

function printResult(resultSum) {
  if (resultSum < 0) {
    result.style.color = "red";
  } else {
    result.style.color = "green";
  }
}

function compliteNumberWithAction(val1, val2, act) {
  num1 = +val1.value;
  num2 = +val2.value;
  if (act == "+") {
    return num1 + num2;
  } else if (act == '-') {
    return num1 - num2;
  } else if (act == '*') {
    return num1 * num2;
  } else if (act == '/') {
    return num1 / num2;
  }
}

buttonSubmit.onclick = function () {
  let sum = compliteNumberWithAction(inputOne, inputTwo, action);
  printResult(sum);
  result.textContent = sum;
};
