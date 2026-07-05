export function renderFooter(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const year = new Date().getFullYear();

  el.innerHTML = `
    <footer class="footer py-4">
      <div class="container">
        <div class="row g-3 align-items-center">
          <div class="col-md-6">
            <div class="d-flex align-items-center gap-2">
              <span class="brand-badge">CR</span>
              <div>
                <div class="fw-black">CarRentX</div>
                <div class="tiny-hint">Firebase + Razorpay based car rental platform</div>
              </div>
            </div>
          </div>

          <div class="col-md-6 text-md-end">
            <div class="d-flex gap-3 justify-content-md-end flex-wrap">
              <a class="tiny-hint" href="/pages/common/terms.html">Terms</a>
              <a class="tiny-hint" href="/pages/common/privacy.html">Privacy</a>
              <a class="tiny-hint" href="/pages/common/contact.html">Contact</a>
            </div>
            <div class="tiny-hint mt-2">© ${year} CarRentX. College Project Demo.</div>
          </div>
        </div>
      </div>
    </footer>
  `;
}
