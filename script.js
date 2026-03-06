
const btn = document.getElementById("themeBtn");

// Load saved theme on page load
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  btn.textContent = "🌛 Dark Mode"; // show Dark Mode icon when in Light Mode
} else {
  btn.textContent = "🌞 Light Mode"; // show Light Mode icon when in Dark Mode
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    btn.textContent = "🌛 Dark Mode"; // now in Light Mode
    localStorage.setItem("theme", "light");
  } else {
    btn.textContent = "🌞 Light Mode"; // now in Dark Mode
    localStorage.setItem("theme", "dark");
  }
});