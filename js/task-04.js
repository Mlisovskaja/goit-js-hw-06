let valueEl = 0;
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const decrementClick = () => {
    console.log(valueEl -= 1);
    counterValue.textContent = valueEl;
};
decrementBtn.addEventListener("click", decrementClick);

const incrementBtn = document.querySelector('[data-action="increment"]');
const incrementClick = () => {
    console.log(valueEl += 1);
    counterValue.textContent = valueEl;
};

incrementBtn.addEventListener("click", incrementClick);


