const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginFormSubmit);

const formElements = loginForm.elements;

function onLoginFormSubmit(event) {
  event.preventDefault();

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("You need to fill in all fields!");
  }

  console.log({ email, password });
  loginForm.reset();
}
