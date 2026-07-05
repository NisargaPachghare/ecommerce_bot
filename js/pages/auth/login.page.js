import { loginUser } from "../../core/auth.core.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await loginUser(email.value, password.value);
    window.location.href = "../user/cars.html";
  } catch (err) {
    alert(err.message);
  }
});
