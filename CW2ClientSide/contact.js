const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const issue = document.getElementById("issue");

const topicButtons = document.querySelectorAll(".contact-tag");
const selectedTopicInput = document.getElementById("selectedTopic");
const selectedTopicText = document.getElementById("selectedTopicText");

const submissionSummary = document.getElementById("submissionSummary");
const summaryName = document.getElementById("summaryName");
const summaryEmail = document.getElementById("summaryEmail");
const summaryPhone = document.getElementById("summaryPhone");
const summaryTopic = document.getElementById("summaryTopic");
const summaryIssue = document.getElementById("summaryIssue");

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error-message");

  input.classList.add("input-error");
  input.setAttribute("aria-invalid", "true");
  error.textContent = message;
}

function clearError(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error-message");

  input.classList.remove("input-error");
  input.setAttribute("aria-invalid", "false");
  error.textContent = "";
}

function validateName() {
  const value = fullName.value.trim();

  if (value.length < 3) {
    showError(fullName, "Please enter a valid full name.");
    return false;
  }

  clearError(fullName);
  return true;
}

function validateEmail() {
  const value = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    showError(email, "Please enter a valid email address.");
    return false;
  }

  clearError(email);
  return true;
}

function validatePhone() {
  const value = phone.value.trim();
  const phonePattern = /^[0-9+\s()-]{10,20}$/;

  if (!phonePattern.test(value)) {
    showError(phone, "Please enter a valid phone number.");
    return false;
  }

  clearError(phone);
  return true;
}

function validateIssue() {
  const value = issue.value.trim();

  if (value.length < 10) {
    showError(issue, "Please describe your request in more detail.");
    return false;
  }

  clearError(issue);
  return true;
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    topicButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const topic = button.dataset.topic;
    selectedTopicInput.value = topic;
    selectedTopicText.textContent = `Selected topic: ${topic}`;

    const currentValue = issue.value.trim();

    if (
      currentValue === "" ||
      currentValue === "AI Solutions:" ||
      currentValue === "Cybersecurity:" ||
      currentValue === "Training:" ||
      currentValue === "General Enquiry:"
    ) {
      issue.value = `${topic}: `;
    }
  });
});

fullName.addEventListener("input", validateName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
issue.addEventListener("input", validateIssue);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isIssueValid = validateIssue();

  if (isNameValid && isEmailValid && isPhoneValid && isIssueValid) {
    const savedName = fullName.value.trim();
    const savedEmail = email.value.trim();
    const savedPhone = phone.value.trim();
    const savedTopic = selectedTopicInput.value || "General Enquiry";
    const savedIssue = issue.value.trim();

    summaryName.textContent = savedName;
    summaryEmail.textContent = savedEmail;
    summaryPhone.textContent = savedPhone;
    summaryTopic.textContent = savedTopic;
    summaryIssue.textContent = savedIssue;

    submissionSummary.hidden = false;
    successMessage.textContent = `Message sent successfully. Topic: ${savedTopic}.`;

    form.reset();

    [fullName, email, phone, issue].forEach(clearError);

    topicButtons.forEach((btn) => btn.classList.remove("active"));
    selectedTopicInput.value = "";
    selectedTopicText.textContent = "No topic selected yet.";

    setTimeout(() => {
      successMessage.textContent = "";
    }, 3000);
  } else {
    successMessage.textContent = "";
    submissionSummary.hidden = true;
  }
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);