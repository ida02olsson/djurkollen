document.addEventListener("DOMContentLoaded", function() {

    function hoverEffect(imageId, hoverSelector, addClass, clickUrl) {
        const img = document.getElementById(imageId);
        const hover = document.querySelector(hoverSelector);

        if (!img || !hover) return;

        hover.addEventListener("mouseenter", () => {
            img.classList.add(addClass);
        });

        hover.addEventListener("mouseleave", () => {
            img.classList.remove(addClass);
        });

        if (clickUrl) {
            hover.addEventListener("click", () => {
                window.location.href = clickUrl;
            });
        }
    }

    hoverEffect("afrika-bild", ".hover-afrika", "enlarged");
    hoverEffect("buffel", ".hover-area-buffalo", "enlarged-buffalo", "non_implemented.html");
    hoverEffect("lejon", ".hover-area-lion", "enlarged-lion", "lion.html");

});