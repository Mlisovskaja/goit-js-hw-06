const form = document.querySelector("form.login-form");
const message = "Всі поля мають бути заповнені";

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log("name", name);
        console.log("value", value);
        if (value === "") {
            alert(message);
        }
    });
    
    form.reset();
}

