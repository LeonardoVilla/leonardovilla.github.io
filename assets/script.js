(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {}

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
    toggle.textContent = currentIsDark() ? "☀️" : "🌙";
  }

  function currentIsDark() {
    var attr = root.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  applyTheme(stored);

  toggle.addEventListener("click", function () {
    var next = currentIsDark() ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();
