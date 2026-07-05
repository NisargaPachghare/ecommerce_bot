import { DB } from "../core/db.core.js";

/**
 * Add a car (admin)
 * images = array of download URLs from secondary storage
 */
export async function addCar(carData) {
  const carId = DB.ref("cars").push().key; // generate id
  const payload = {
    carId,
    status: "active",
    createdAt: Date.now(),
    ...carData
  };
  await DB.set(`cars/${carId}`, payload);
  return carId;
}

/**
 * Get latest cars (used on homepage top cars)
 */
export async function getLatestCars(limit = 4) {
  const carsObj = await DB.get("cars");
  if (!carsObj) return [];
  const cars = Object.values(carsObj);

  cars.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  return cars.slice(0, limit);
}
