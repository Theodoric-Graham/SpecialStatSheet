"use strict";
//Elements
const total = document.querySelector(".stat__total");
let totalNum = Number(total.textContent);
const resetBtn = document.querySelector(".btn__reset");
const statEl = document.querySelectorAll(".stat__num");
let statArr = Array.from(statEl, (el) => Number(el.textContent));
console.log(total);
//Event Delegation Btn Function
document
  .querySelector(".stats__section")
  .addEventListener("click", function (e) {
    const id = e.target.getAttribute("id");
    console.log(id);
    //Plus Function
    if (e.target.classList.contains("btn__plus") && totalNum !== 0) {
      totalNum -= 1;
      total.textContent = totalNum;
      statArr[id] += 1;
      statEl[id].textContent = statArr[id];
      console.log(statArr);

      //Minus Function
    }
    if (
      e.target.classList.contains("btn__minus") &&
      totalNum !== 10 &&
      statArr[id] !== 0
    ) {
      totalNum += 1;
      total.textContent = totalNum;
      statArr[id] -= 1;
      statEl[id].textContent = statArr[id];

      //Reset Function
    }
    if (e.target.classList.contains("btn__reset")) {
      totalNum = 10;
      total.textContent = 10;
      statArr = [0, 0, 0, 0, 0, 0, 0];
      statEl.forEach((el) => (el.textContent = 0));
    }
  });
console.log(statArr[2]);
