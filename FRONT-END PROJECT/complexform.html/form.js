
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("num");
    const dobInput = document.getElementById("dob");
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const countrySelect = document.getElementById("select STATE");
    const checkbox = document.getElementById("checkbox");

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


    const isValidPhone = (phone) => /^\d{10}$/.test(phone);

    const validateForm = (event) => {
      event.preventDefault();
      let isValid = true;
      let errorMessage = "";

      if (!nameInput.value.trim()) {
        isValid = false;
        errorMessage += "Please enter your name.\n";
      }
      if (!isValidEmail(emailInput.value)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
      }
      if (!isValidPhone(phoneInput.value)) {
        isValid = false;
        errorMessage += "Please enter a valid 10-digit phone number.\n";
      }
      if (!dobInput.value) {
        isValid = false;
        errorMessage += "Please enter your date of birth.\n";
      }
      if (![...genderInputs].some(input => input.checked)) {
        isValid = false;
        errorMessage += "Please select your gender.\n";
      }
      if (!countrySelect.value.trim()) {
        isValid = false;
        errorMessage += "Please select a country.\n";
      }
      if (!checkbox.checked) {
        isValid = false;
        errorMessage += "Please agree to the terms and conditions.\n";
      }

      if (isValid) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed:\n" + errorMessage);
      }
    };
    document.querySelector(".button").addEventListener("click", validateForm);
  });

