const textInput = document.querySelector("input");
const inputLength = parseInt(textInput.dataset.length);


textInput.addEventListener("input", () => {
    console.log(textInput.value.length);
})


textInput.addEventListener("blur", changeColor);

function changeColor() {
    textInput.classList.add("invalid");
    if (textInput.value.length === inputLength) {
        textInput.classList.replace("invalid", "valid");
    }
     else {
        textInput.classList.replace("valid", "invalid");
    }
}

