// Granite Ridge Supply v2 main UI
(function () {
  const root = document.documentElement;

  // Theme persistence
  const saved = localStorage.getItem("gr_theme");
  if (saved === "light") root.setAttribute("data-theme", "light");

  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      if (isLight) {
        root.removeAttribute("data-theme");
        localStorage.setItem("gr_theme", "dark");
      } else {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("gr_theme", "light");
      }
    });
  }

  // Mobile nav
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const open = mobileNav.style.display === "block";
      mobileNav.style.display = open ? "none" : "block";
    });
  }

  // Fake newsletter submit (placeholder)
  const notifyBtn = document.getElementById("notifyBtn");
  const notifyMsg = document.getElementById("notifyMsg");
  if (notifyBtn && notifyMsg) {
    notifyBtn.addEventListener("click", () => {
      notifyMsg.textContent = "Saved (mock). Hook this to your email tool when you go live.";
    });
  }

  // Fake contact submit (placeholder)
  const sendBtn = document.getElementById("sendBtn");
  const sendMsg = document.getElementById("sendMsg");
  if (sendBtn && sendMsg) {
    sendBtn.addEventListener("click", () => {
      sendMsg.textContent = "Sent (mock). Replace with your backend / form handler.";
    });
  }
})();
