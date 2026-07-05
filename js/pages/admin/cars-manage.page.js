import { uploadMultipleToSecondary } from "../../core/storage.core.js";
import { addCar } from "../../services/cars.service.js";

const form = document.getElementById("carForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("carTitle").value.trim();
  const brand = document.getElementById("carBrand").value.trim();
  const city = document.getElementById("carCity").value.trim();
  const type = document.getElementById("carType").value.trim();
  const pricePerDay = Number(document.getElementById("carPrice").value || 0);
  const files = document.getElementById("carImages").files;

  if (!title || !brand || !city || !type || !pricePerDay) {
    alert("Please fill all required fields.");
    return;
  }
  if (!files || files.length === 0) {
    alert("Please select at least 1 car image.");
    return;
  }

  try {
    // 1) Upload images to SECONDARY storage
    const urls = await uploadMultipleToSecondary(files, "cars");

    // 2) Save data in PRIMARY RTDB
    const carId = await addCar({
      title,
      brand,
      city,
      type,
      pricePerDay,
      images: urls
    });

    alert("Car Added Successfully ✅");
    form.reset();
    console.log("Car added:", carId);
  } catch (err) {
    console.error(err);
    alert("Error: " + err.message);
  }
});
