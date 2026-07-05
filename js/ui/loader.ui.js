export function mountLoader(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;

  el.innerHTML = `
    <div class="loader-backdrop" id="loaderBackdrop">
      <div class="loader-card">
        <div class="spinner"></div>
        <div class="fw-black" id="loaderTitle">Loading...</div>
        <div class="tiny-hint mt-1">Please wait</div>
      </div>
    </div>
  `;
}

export function showLoader(title = "Loading...") {
  const backdrop = document.getElementById("loaderBackdrop");
  const t = document.getElementById("loaderTitle");
  if (t) t.textContent = title;
  if (backdrop) backdrop.style.display = "flex";
}

export function hideLoader() {
  const backdrop = document.getElementById("loaderBackdrop");
  if (backdrop) backdrop.style.display = "none";
}
