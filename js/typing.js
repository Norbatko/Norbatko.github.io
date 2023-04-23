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


function download_sound() {
    document.getElementById('kow_play').play();
    window.open('/download/kowculator_1.0_amd64.deb');
}
