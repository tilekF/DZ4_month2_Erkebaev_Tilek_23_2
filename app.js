const counterEl = document.getElementById("counter");
let counterValue = 0;

function updateCounter() {
  counterEl.textContent = counterValue;
  if (counterValue > 0) {
    counterEl.classList.remove("negative");
    counterEl.classList.add("positive");
  } else if (counterValue < 0) {
    counterEl.classList.remove("positive");
    counterEl.classList.add("negative");
  } else {
    counterEl.classList.remove("positive", "negative");
  }
}

document.getElementById("zoomInBtn").addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});

document.getElementById("reduceBtn").addEventListener("click", () => {
  counterValue--;
  updateCounter();
});