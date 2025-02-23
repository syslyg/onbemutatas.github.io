document.addEventListener("DOMContentLoaded", function() {
    function loadText(file) {
        fetch(file)
            .then(response => response.text())
            .then(text => document.getElementById("content").innerHTML = text)
            .catch(error => console.error("Hiba a fájl betöltésekor:", error));
    }
    window.loadText = loadText;
});
document.getElementById("home-button").addEventListener("click", function () {
    location.reload();
});