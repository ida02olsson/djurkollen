document.addEventListener("DOMContentLoaded", function() {
    var buffelBild = document.getElementById('buffel');
    var hoverArea = document.querySelector('.hover-area-buffalo');

    hoverArea.addEventListener('mouseenter', function() {
        buffelBild.classList.add('enlarged-buffalo');
    });

    hoverArea.addEventListener('mouseleave', function() {
        buffelBild.classList.remove('enlarged-buffalo');
    });

    hoverArea.addEventListener('click', function() {
        window.location.href = "non_implemented.html";
    });
});