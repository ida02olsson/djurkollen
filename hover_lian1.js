const lian1 = document.getElementById('lian1');

let insideArea1 = false;  
let shouldStop1 = false;  

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const triggerArea = {
        x: 5,
        y: 120,
        width: 80,
        height: 650
    };

    const isInside = (
        mouseX >= triggerArea.x &&
        mouseX <= triggerArea.x + triggerArea.width &&
        mouseY >= triggerArea.y &&
        mouseY <= triggerArea.y + triggerArea.height
    );

    if (isInside && !insideArea1) {
        insideArea1 = true;
        lian1.classList.add('swing1');
    }

    if (!isInside && insideArea1) {
        insideArea1 = false;
        shouldStop1 = true;
    }
});

lian1.addEventListener('animationiteration', () => {
    if (shouldStop1) {
        lian1.classList.remove('swing1');
        shouldStop1 = false;
    }
});
