const themeToggleButton = document.querySelector("#theme-toggle-button");

const LOCAL_STORAGE_PREFIX = "portfolio-"
//Get saved theme from LocalStorage or Cookie
let currentTheme = localStorage.getItem(LOCAL_STORAGE_PREFIX + "theme") || "dark";

function applyTheme(themeName) {
  if (themeName === "light") {
    document.documentElement.style.setProperty("--clr-standard-text", "#0D0D0D");
    document.documentElement.style.setProperty("--clr-main-bg", "#F3F3F3");
    document.documentElement.style.setProperty("--clr-secondary-bg", "#D9D9D9");
    currentTheme = "light";
    themeToggleButton.innerHTML = `<i class="fas fa-moon"></i>`;
  } else {
    document.documentElement.style.setProperty("--clr-standard-text", "#F3F3F3");
    document.documentElement.style.setProperty("--clr-main-bg", "#0D0D0D");
    document.documentElement.style.setProperty("--clr-secondary-bg", "#262626");
    currentTheme = "dark";
    themeToggleButton.innerHTML = `<i class="fas fa-sun"></i>`;
  }
  localStorage.setItem(LOCAL_STORAGE_PREFIX + "theme", currentTheme);
}

themeToggleButton.addEventListener("click", () => {
  if (currentTheme === "dark") {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }
});

applyTheme(currentTheme);