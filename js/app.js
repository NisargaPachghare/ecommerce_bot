import { renderNavbar } from "./ui/navbar.ui.js";
import { renderFooter } from "./ui/footer.ui.js";
import { mountLoader, showLoader, hideLoader } from "./ui/loader.ui.js";

renderNavbar("appNavbar");
renderFooter("appFooter");
mountLoader("appLoader");

// ================= HERO chips UI + redirect =================
let selectedType = "";
document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedType = btn.getAttribute("data-type") || "";
  });
});

const searchBtn = document.getElementById("heroSearchBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const city = document.getElementById("heroCity")?.value || "";
    const pickup = document.getElementById("heroPickupDate")?.value || "";
    const drop = document.getElementById("heroDropDate")?.value || "";

    if (!city || !pickup || !drop) {
      alert("Please select city + pickup date + drop date.");
      return;
    }
    if (drop <= pickup) {
      alert("Drop date must be after pickup date.");
      return;
    }

    showLoader("Searching available cars...");
    const params = new URLSearchParams({ city, type: selectedType, pickup, drop }).toString();

    setTimeout(() => {
      hideLoader();
      window.location.href = `pages/user/cars.html?${params}`;
    }, 450);
  });
}

// ================= Home: Load latest 4 cars =================
// NOTE: This is "college-level": if Firebase isn't wired yet, it will show empty state.
// When you connect RTDB, just implement getLatestCars() using Firebase SDK.

const topCarsGrid = document.getElementById("topCarsGrid");
const topCarsSkeleton = document.getElementById("topCarsSkeleton");
const topCarsEmpty = document.getElementById("topCarsEmpty");

async function getLatestCarsMock() {
  // Mock sample (shows UI now). Later replace with Firebase data.
  // Return [] to test empty state.
  return [
    {
      carId: "car_1",
      title: "Hyundai Creta 2023",
      city: "Bangalore",
      type: "SUV",
      pricePerDay: 2599,
      imageUrl: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      carId: "car_2",
      title: "Honda City 2022",
      city: "Pune",
      type: "Sedan",
      pricePerDay: 2199,
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
    },
    {
      carId: "car_3",
      title: "Maruti Swift 2021",
      city: "Mumbai",
      type: "Hatchback",
      pricePerDay: 1599,
      imageUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop"
    },
    {
      carId: "car_4",
      title: "Kia Seltos 2024",
      city: "Delhi",
      type: "SUV",
      pricePerDay: 2799,
      imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop"
    }
  ];
}

function carCardHTML(car) {
  const img = car.imageUrl || "assets/img/placeholders/car-placeholder.png";
  const price = Number(car.pricePerDay || 0).toLocaleString("en-IN");
  const title = car.title || "Car";
  const type = car.type || "Car";
  const city = car.city || "City";
  const carId = encodeURIComponent(car.carId || "");

  return `
    <div class="col-md-6 col-lg-3">
      <a class="car-card d-block" href="pages/user/car-details.html?carId=${carId}">
        <div class="car-thumb">
          <img src="${img}" alt="${title}" loading="lazy">
          <div class="car-badge">${type}</div>
        </div>
        <div class="car-meta">
          <p class="car-title">${title}</p>
          <div class="car-sub">${city}</div>
          <div class="price-row">
            <div class="price-tag">₹${price} <span>/day</span></div>
            <span class="btn btn-sm btn-glow">Book</span>
          </div>
        </div>
      </a>
    </div>
  `;
}

async function loadTopCars() {
  if (!topCarsGrid || !topCarsSkeleton || !topCarsEmpty) return;

  try {
    // Replace this with Firebase later:
    // const cars = await getLatestCarsFromFirebase();
    const cars = await getLatestCarsMock();

    topCarsSkeleton.classList.add("d-none");

    if (!cars || cars.length === 0) {
      topCarsEmpty.classList.remove("d-none");
      return;
    }

    topCarsGrid.innerHTML = cars.slice(0, 4).map(carCardHTML).join("");
    topCarsGrid.classList.remove("d-none");
  } catch (e) {
    topCarsSkeleton.classList.add("d-none");
    topCarsEmpty.classList.remove("d-none");
  }
}

loadTopCars();
