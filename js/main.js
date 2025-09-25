// ===== Contact Form Validation =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];

    if (nameField.value.trim().length < 2) {
      errors.push("Please enter a valid name.");
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(emailField.value)) {
      errors.push("Please enter a valid email address.");
    }

    if (messageField.value.trim().length < 10) {
      errors.push("Message must be at least 10 characters long.");
    }

    if (errors.length > 0) {
      feedback.textContent = errors.join(" ");
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Message sent successfully!";
      feedback.style.color = "green";

      // Clear form
      form.reset();
    }
  });
});
