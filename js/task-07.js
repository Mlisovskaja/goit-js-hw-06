const slider = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

const onChangeSliderPosition = (event) => {
  output.style.fontSize = String(event.currentTarget.value) + "px";
};

slider.addEventListener("input", onChangeSliderPosition);