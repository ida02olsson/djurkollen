const lian2_1 = document.getElementById('lian2');

let insideArea2_1 = false;  
let shouldStop2_1 = false;  

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const triggerArea = {
        x: 80,
        y: 120,
        width: 100,
        height: 615
    };

    const isInside = (
        mouseX >= triggerArea.x &&
        mouseX <= triggerArea.x + triggerArea.width &&
        mouseY >= triggerArea.y &&
        mouseY <= triggerArea.y + triggerArea.height
    );

    if (isInside && !insideArea2_1) {
        insideArea2_1 = true;
        lian2.classList.add('swing2');
    }

    if (!isInside && insideArea2_1) {
        insideArea2_1 = false;
        shouldStop2_1 = true;
    }
});

lian2.addEventListener('animationiteration', () => {
    if (shouldStop2_1) {
        lian2.classList.remove('swing2');
        shouldStop2_1 = false;
    }
});
