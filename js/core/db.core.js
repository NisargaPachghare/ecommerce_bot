import {
  ref,
  set,
  push,
  update,
  remove,
  get,
  onValue,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import { db } from "../config/firebase.primary.js";

export const DB = {
  ref: (path) => ref(db, path),
  set: (path, data) => set(ref(db, path), data),
  push: (path, data) => push(ref(db, path), data),
  update: (path, data) => update(ref(db, path), data),
  remove: (path) => remove(ref(db, path)),
  get: async (path) => (await get(ref(db, path))).val(),
  onValue: (path, cb) => onValue(ref(db, path), (snap) => cb(snap.val())),
  ts: () => serverTimestamp()
};
