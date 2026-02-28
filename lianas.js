const lianas = [
    { id: "lian1", area: { x: 5, y: 120, width: 80, height: 650 }, swingClass: "swing1" },
    { id: "lian2", area: { x: 80, y: 120, width: 205, height: 675 }, swingClass: "swing2" },
    { id: "lian3", area: { x: 1250, y: 120, width: 80, height: 680 }, swingClass: "swing3" },
    { id: "lian4", area: { x: 1330, y: 120, width: 80, height: 500 }, swingClass: "swing4" },
];

const lianaStates = {};

lianas.forEach(liana => {
    const element = document.getElementById(liana.id);
    if (!element) return;

    lianaStates[liana.id] = { inside: false, shouldStop: false };

    element.addEventListener("animationiteration", () => {
        if (lianaStates[liana.id].shouldStop) {
            element.classList.remove(liana.swingClass);
            lianaStates[liana.id].shouldStop = false;
        }
    });
});

document.addEventListener("mousemove", e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    lianas.forEach(liana => {
        const element = document.getElementById(liana.id);
        if (!element) return;

        const state = lianaStates[liana.id];
        const area = liana.area;

        const isInside = (
            mouseX >= area.x &&
            mouseX <= area.x + area.width &&
            mouseY >= area.y &&
            mouseY <= area.y + area.height
        );

        if (isInside && !state.inside) {
            state.inside = true;
            element.classList.add(liana.swingClass);
        }

        if (!isInside && state.inside) {
            state.inside = false;
            state.shouldStop = true;
        }
    });
});