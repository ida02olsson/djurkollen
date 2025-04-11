const lian4 = document.getElementById('lian4');

let insideArea4 = false;  
let shouldStop4 = false;  

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const triggerArea = {
        x: 1330,
        y: 120,
        width: 80,
        height: 500
    };

    const isInside = (
        mouseX >= triggerArea.x &&
        mouseX <= triggerArea.x + triggerArea.width &&
        mouseY >= triggerArea.y &&
        mouseY <= triggerArea.y + triggerArea.height
    );

    if (isInside && !insideArea4) {
        insideArea4 = true;
        lian4.classList.add('swing4');
    }

    if (!isInside && insideArea4) {
        insideArea4 = false;
        shouldStop4 = true;
    }
});

lian4.addEventListener('animationiteration', () => {
    if (shouldStop4) {
        lian4.classList.remove('swing4');
        shouldStop4 = false;
    }
});
