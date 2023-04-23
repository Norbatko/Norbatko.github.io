const text = document.querySelector(".second-text");

// Prepisovani textu v casovem intervalu
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Tomáš Ebert.";
    }, 0);
    setTimeout(() => {
        text.textContent = "a programmer.";
    }, 4000);
}

textLoad();
setInterval(textLoad, 8000);
