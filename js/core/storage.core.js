import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import { storage } from "../config/firebase.secondary.js";

// Upload single file
export function uploadFile(file, folder = "cars") {
  return new Promise((resolve, reject) => {

    const safeName = file.name.replace(/\s+/g, "_");
    const path = `${folder}/${Date.now()}_${safeName}`;

    const refFile = storageRef(storage, path);
    const task = uploadBytesResumable(refFile, file);

    task.on(
      "state_changed",
      null,
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve(url);
      }
    );
  });
}

// Upload multiple images
export async function uploadMultiple(files, folder = "cars") {
  const urls = [];

  for (const file of files) {
    const url = await uploadFile(file, folder);
    urls.push(url);
  }

  return urls;
}
