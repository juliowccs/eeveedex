const buttonTheme = document.getElementById("button-theme");
const body = document.querySelector("body");
const theme = window.localStorage.getItem("theme");
const refresh = document.getElementById("refresh");
const changeButtonImage = document.querySelector(".button-image");

if (theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("button-image").src="src/imgs/moon.png";
}

buttonTheme.addEventListener("click", () => {
    const darkThemeOn = body.classList.contains("dark");
    document.body.classList.toggle("dark");

    if (darkThemeOn) {
        changeButtonImage.setAttribute("src", "./src/imgs/sun.png");
    } else {
        changeButtonImage.setAttribute("src", "./src/imgs/moon.png");
    }
    
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else {
        window.localStorage.setItem("theme", "dark");
   }
});