
var afrikaBild = document.getElementById('afrika-bild');
var hoverArea = document.querySelector('.hover-afrika');

hoverArea.addEventListener('mouseenter', function() {
    afrikaBild.classList.add('enlarged');
});

hoverArea.addEventListener('mouseleave', function() {
    afrikaBild.classList.remove('enlarged');
});