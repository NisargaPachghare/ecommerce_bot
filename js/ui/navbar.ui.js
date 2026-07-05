export function renderNavbar(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;

  el.innerHTML = `
 <nav class="navbar navbar-expand-lg navbar-light navbar-blur sticky-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="/index.html">
        <span class="brand-badge">CR</span>
        <span class="fw-black">CarRentX</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
          <li class="nav-item"><a class="nav-link" href="/pages/user/cars.html">Cars</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/user/my-bookings.html">My Bookings</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/user/profile.html">Profile</a></li>
          <li class="nav-item"><a class="btn btn-sm btn-glow ms-lg-2" href="/pages/auth/login.html">
            <i class="bi bi-box-arrow-in-right"></i> Login
          </a></li>
        </ul>
      </div>
    </div>
  </nav>
  `;
}
