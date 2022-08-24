const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action= "decrement"]');
const valueResult = document.querySelector("#value");

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueResult.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueResult.textContent = counterValue;
});
