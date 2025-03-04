const items = [
    { name: "Afrikansk buffel", url: "non_implemented.html" },
    { name: "Flodhäst", url: "non_implemented.html" },
    { name: "Giraff", url: "non_implemented.html" },
    { name: "Hyena", url: "non_implemented.html" },
    { name: "Jaguar", url: "non_implemented.html" },
    { name: "Krokodil", url: "non_implemented.html" },
    { name: "Lejon", url: "lejon.html" },
    { name: "Noshörning", url: "non_implemented.html" },
    { name: "Elefant", url: "non_implemented.html" },
    { name: "Zebra", url: "non_implemented.html" }
];

const searchInput = document.getElementById("search");
const suggestionsContainer = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    suggestionsContainer.innerHTML = "";

    if (query) {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

        filteredItems.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("suggestion-item");
            div.textContent = item.name;
            div.addEventListener("click", () => {
                window.location.href = item.url;
            });
            suggestionsContainer.appendChild(div);
        });

        suggestionsContainer.style.display = "block";
    } else {
        suggestionsContainer.style.display = "none";
    }
});

document.addEventListener("click", function(event) {
    if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
        suggestionsContainer.style.display = "none";
    }
});