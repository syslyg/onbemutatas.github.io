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
function openImage(imgElement) {
    const overlay = document.getElementById("image-overlay");
    const overlayImg = document.getElementById("overlay-img");

    overlayImg.src = imgElement.src;  // Az eredeti kép forrását átvesszük
    overlay.style.display = "flex";  // Megjelenítjük az overlay-t
}

function closeImage() {
    document.getElementById("image-overlay").style.display = "none";
}