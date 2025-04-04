const items = [
    { name: "Lejon", url: "lejon.html" },
    { name: "Afrikansk buffel", url: "non_implemented.html" },
    { name: "Giraff", url: "afrika.html" },
    { name: "Jaguar", url: "afrika.html" },
    { name: "Krokodil", url: "afrika.html" },
    { name: "Noshörning", url: "afrika.html" },
    { name: "Elefant", url: "afrika.html" },
    { name: "Zebra", url: "afrika.html"},
    { name: "Kronhjort 🔒", url: "#"},
    { name: "Brunbjörn 🔒", url: "#"},
    { name: "Varg 🔒", url: "#"},
    { name: "Rödräv 🔒", url: "#"},
    { name: "Igelkott 🔒", url: "#"},
    { name: "Lo 🔒", url: "#"},
    { name: "Fjällräv 🔒", url: "#"},
    { name: "Vildsvin 🔒", url: "#"},
    { name: "Sibirisk tiger 🔒", url: "#"},
    { name: "Panda 🔒", url: "#"},
    { name: "Snöleopard 🔒", url: "#"},
    { name: "Yak 🔒", url: "#"},
    { name: "Gibbonapa 🔒", url: "#"},
    { name: "Kungsfiskare 🔒", url: "#"},
    { name: "Komodovaran 🔒", url: "#"},
    { name: "Isbjörn 🔒", url: "#"},
    { name: "Narval 🔒", url: "#"},
    { name: "Valross 🔒", url: "#"},
    { name: "Gråsäl 🔒", url: "#"},
    { name: "Snöuggla 🔒", url: "#"},
    { name: "Ren 🔒", url: "#"},
    { name: "Känguru 🔒", url: "#"},
    { name: "Koala 🔒", url: "#"},
    { name: "Emu 🔒", url: "#"},
    { name: "Dingo 🔒", url: "#"},
    { name: "Grizzlybjörn 🔒", url: "#"},
    { name: "Puma 🔒", url: "#"},
    { name: "Skallerorm 🔒", url: "#"},
    { name: "Tvättbjörn 🔒", url: "#"},
    { name: "Bison 🔒", url: "#"},
    { name: "Alligator 🔒", url: "#"},
    { name: "Vitsvanshjort 🔒", url: "#"},
    { name: "Jaguar 🔒", url: "#"},
    { name: "Kapybara 🔒", url: "#"},
    { name: "Anakonda 🔒", url: "#"},
    { name: "Sengångare 🔒", url: "#"},
    { name: "Tukan 🔒", url: "#"},
    { name: "Manat 🔒", url: "#"},
    { name: "Lama 🔒", url: "#"},
    { name: "Kejsarpingvin 🔒", url: "#"},
    { name: "Leopardsäl 🔒", url: "#"},
    { name: "Albratross 🔒", url: "#"},
    { name: "Blåval 🔒", url: "#"},
    { name: "Adeliepingvin 🔒", url: "#"}
];

const searchInput = document.getElementById("search");
const suggestionsContainer = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    suggestionsContainer.innerHTML = "";

    if (query) {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

        /*filteredItems.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("suggestion-item");
            div.textContent = item.name;
            div.addEventListener("click", () => {
                window.location.href = item.url;
            });
            suggestionsContainer.appendChild(div);
        });*/

        filteredItems.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("suggestion-item");
        
            const isLocked = item.name.includes("🔒");
            const displayName = item.name.replace(" 🔒", ""); 
            div.textContent = displayName;
        
            if (isLocked) {
                div.classList.add("locked");
            } else {
                div.addEventListener("click", () => {
                    window.location.href = item.url;
                });
            }
        
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