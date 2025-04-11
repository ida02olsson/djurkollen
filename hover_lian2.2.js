const lian2_2 = document.getElementById('lian2');

let insideArea2_2 = false;  
let shouldStop2_2 = false;  

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const triggerArea = {
        x: 180,
        y: 430,
        width: 105,
        height: 360
    };

    const isInside = (
        mouseX >= triggerArea.x &&
        mouseX <= triggerArea.x + triggerArea.width &&
        mouseY >= triggerArea.y &&
        mouseY <= triggerArea.y + triggerArea.height
    );

    if (isInside && !insideArea2_2) {
        insideArea2_2 = true;
        lian2.classList.add('swing2');
    }

    if (!isInside && insideArea2_2) {
        insideArea2_2 = false;
        shouldStop2_2 = true;
    }
});

lian2.addEventListener('animationiteration', () => {
    if (shouldStop2_2) {
        lian2.classList.remove('swing2');
        shouldStop2_2 = false;
    }
});
