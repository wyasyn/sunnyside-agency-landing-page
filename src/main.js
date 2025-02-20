const menu = document.getElementById("menu");
const navList = document.getElementById("nav-list");

function toggleVisibility() {
  if (navList.style.display === "none" || navList.style.display === "") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "none";
  }
}

menu.addEventListener("click", toggleVisibility);

// Optional: Hide when clicking outside the menu
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !navList.contains(event.target)) {
    navList.style.display = "none";
  }
});
