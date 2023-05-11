let theme = 0;

function darktheme() {
    if (theme == 0 ) {
        theme = 1
        document.body.classList.toggle("dark");
        document.getElementById("button-image").src="src/imgs/moon.png";
    } else {
        theme = 0
        document.body.classList.toggle("dark");
        document.getElementById("button-image").src="src/imgs/sun.png";
}}