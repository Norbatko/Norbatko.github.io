function download_sound() {
    // Spusteni zvuku buceni kravy     
    document.getElementById('kow_play').play();
    // Stazeni instalacniho balicku
    window.open('/download/kowculator_1.0_amd64.deb');
}
