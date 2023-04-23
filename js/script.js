// Author: xebert00, Tomáš Ebert

const text = document.querySelector(".second-text");

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

