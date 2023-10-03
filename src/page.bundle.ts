const setTheme = (theme: string) => {
  const classes = document.documentElement.classList;

  if (theme === "dark") {
    classes.add("dark");
  } else {
    classes.remove("dark");
  }
};

document.getElementById("print")?.addEventListener("click", () => print());

Array.from(document.getElementsByClassName("theme")).forEach((element) =>
  element.addEventListener("click", () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setTheme(localStorage.theme);
  })
);

addEventListener("storage", (e: StorageEvent) => {
  if (e.key === "theme") {
    setTheme(e.newValue || "dark");
  }
});

if (!localStorage.theme) {
  localStorage.theme = "dark";
}

setTheme(localStorage.theme);
