const lian3 = document.getElementById('lian3');

let insideArea3 = false;  
let shouldStop3 = false;  

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const triggerArea = {
        x: 1250,
        y: 120,
        width: 80,
        height: 680
    };

    const isInside = (
        mouseX >= triggerArea.x &&
        mouseX <= triggerArea.x + triggerArea.width &&
        mouseY >= triggerArea.y &&
        mouseY <= triggerArea.y + triggerArea.height
    );

    if (isInside && !insideArea3) {
        insideArea3 = true;
        lian3.classList.add('swing3');
    }

    if (!isInside && insideArea3) {
        insideArea3 = false;
        shouldStop3 = true;
    }
});

lian3.addEventListener('animationiteration', () => {
    if (shouldStop3) {
        lian3.classList.remove('swing3');
        shouldStop3 = false;
    }
});
