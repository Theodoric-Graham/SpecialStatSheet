"use strict";
//Elements
const total = document.querySelector(".point-total");
let totalNum = Number(total.textContent);
const resetBtn = document.querySelector(".btn-reset");
const statEl = document.querySelectorAll(".stat__num");
let statArr = Array.from(statEl, (el) => Number(el.textContent));

//Event Delegation Btn Function
document.querySelector(".stat-section").addEventListener("click", function (e) {
  //Pulling number from the classlist to use as index
  const classList = e.target.getAttribute("class");
  const index = classList.charAt(0);
  //Plus Function
  if (e.target.classList.contains("btn__plus") && totalNum !== 0) {
    totalNum -= 1;
    total.textContent = totalNum;
    statArr[index] += 1;
    statEl[index].textContent = statArr[index];

    //Minus Function
  }
  if (
    e.target.classList.contains("btn__minus") &&
    totalNum !== 10 &&
    statArr[index] !== 0
  ) {
    totalNum += 1;
    total.textContent = totalNum;
    statArr[index] -= 1;
    statEl[index].textContent = statArr[index];
  }
});

//Reset Function
resetBtn.addEventListener("click", function () {
  //Reset Function

  totalNum = 10;
  total.textContent = 10;
  statArr = [0, 0, 0, 0, 0, 0, 0];
  statEl.forEach((el) => (el.textContent = 0));
});
