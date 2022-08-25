const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = "56px";

inputEl.addEventListener("input", onMoveSlider);

function onMoveSlider(event) {
  let fontSize = event.currentTarget.value;
  textEl.style.fontSize = `${fontSize}px`;
}
