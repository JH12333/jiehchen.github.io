const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  formStatus.textContent = "";
  formStatus.style.color = "red";

  if (nameValue === "") {
    formStatus.textContent = "Please enter your name.";
    nameInput.focus();
    return;
  }

  if (nameValue.length < 2) {
    formStatus.textContent = "Name must be at least 2 characters long.";
    nameInput.focus();
    return;
  }

  if (emailValue === "") {
    formStatus.textContent = "Please enter your email.";
    emailInput.focus();
    return;
  }

  if (
    !emailValue.includes("@") ||
    !emailValue.includes(".") ||
    emailValue.length < 9
  ) {
    formStatus.textContent = "Email is not valid.";
    emailInput.focus();
    return;
  }

  if (messageValue === "") {
    formStatus.textContent = "Please enter your message.";
    messageInput.focus();
    return;
  }

  if (messageValue.length < 20) {
    formStatus.textContent = "Message must be at least 20 characters long.";
    messageInput.focus();
    return;
  }

  formStatus.style.color = "green";
  formStatus.textContent = "Your message has been submitted!";

  contactForm.reset();
});
