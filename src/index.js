const signUpForm = document.getElementById("sign-up-form");
const form = document.getElementById("form");
const inputEmail = document.getElementById("input-email");
const errorText = document.getElementById("error-text");
const successMessage = document.getElementById("success-message");
const btnDismissMessage = document.getElementById("btn-dismiss-message");
const emailSent = document.getElementById("email-sent");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = inputEmail.value;

  if (emailValue === "") {
    inputEmail.classList.add("input-error");
    errorText.textContent = "Email is required";
  } else if (!emailRegex.test(emailValue)) {
    inputEmail.classList.add("input-error");
    errorText.textContent = "Valid email required";
  } else {
    signUpForm.classList.add("hidden");
    emailSent.textContent = emailValue;
    successMessage.classList.remove("hidden");
    inputEmail.value = "";
  }
});

btnDismissMessage.addEventListener("click", () => {
  successMessage.classList.add("hidden");
  signUpForm.classList.remove("hidden");
});

inputEmail.addEventListener("focus", () => {
  inputEmail.classList.remove("input-error");
  errorText.textContent = "";
});
