import { registerUser } from "../../core/auth.core.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const profile = {
    name: name.value.trim(),
    phone: phone.value.trim()
  };

  try {
    await registerUser(email.value, password.value, profile);
    alert("Registration successful!");
    window.location.href = "../user/cars.html";
  } catch (err) {
    alert(err.message);
  }
});
