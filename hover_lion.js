document.addEventListener("DOMContentLoaded", function() {
    var lejonBild = document.getElementById('lejon');
    var hoverArea = document.querySelector('.hover-area-lion');

    hoverArea.addEventListener('mouseenter', function() {
        lejonBild.classList.add('enlarged-lion');
    });

    hoverArea.addEventListener('mouseleave', function() {
        lejonBild.classList.remove('enlarged-lion');
    });

    hoverArea.addEventListener('click', function() {
        window.location.href = "lejon.html";
    });
});