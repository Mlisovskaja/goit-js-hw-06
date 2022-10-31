const form = document.querySelector("form.login-form");
const message = "Всі поля мають бути заповнені";

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
         } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Усі поля мають бути заповненими!");
  }
  console.log({ Login: email.value, Password: password.value });
    
    form.reset();
}

