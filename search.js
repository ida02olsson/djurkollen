const items = [
    { name: "Antarktis 🔒", url: "#" },
    { name: "Sydamerika 🔒", url: "#" },
    { name: "Nordamerika 🔒", url: "#" },
    { name: "Oceanien 🔒", url: "#" },
    { name: "Arktis 🔒", url: "#" },
    { name: "Asien 🔒", url: "#" },
    { name: "Europa 🔒", url: "#" },
    { name: "Afrika", url: "afrika.html" },

    { name: "Afrika: Lejon", url: "lejon.html" },
    { name: "Afrika: Afrikansk buffel", url: "non_implemented.html" },
    { name: "Afrika: Giraff", url: "afrika.html" },
    { name: "Afrika: Leopard", url: "afrika.html" }, 
    { name: "Afrika: Krokodil", url: "afrika.html" },
    { name: "Afrika: Noshörning", url: "afrika.html" },
    { name: "Afrika: Elefant", url: "afrika.html" },
    { name: "Afrika: Zebra", url: "afrika.html" },

    { name: "Europa: Kronhjort 🔒", url: "#" },
    { name: "Europa: Brunbjörn 🔒", url: "#" },
    { name: "Europa: Varg 🔒", url: "#" },
    { name: "Europa: Rödräv 🔒", url: "#" },
    { name: "Europa: Igelkott 🔒", url: "#" },
    { name: "Europa: Lo 🔒", url: "#" },
    { name: "Europa: Fjällräv 🔒", url: "#" },
    { name: "Europa: Vildsvin 🔒", url: "#" },

    { name: "Asien: Sibirisk tiger 🔒", url: "#" },
    { name: "Asien: Panda 🔒", url: "#" },
    { name: "Asien: Snöleopard 🔒", url: "#" },
    { name: "Asien: Yak 🔒", url: "#" },
    { name: "Asien: Gibbonapa 🔒", url: "#" },
    { name: "Asien: Kungsfiskare 🔒", url: "#" },
    { name: "Asien: Komodovaran 🔒", url: "#" },

    { name: "Arktis: Isbjörn 🔒", url: "#" },
    { name: "Arktis: Narval 🔒", url: "#" },
    { name: "Arktis: Valross 🔒", url: "#" },
    { name: "Arktis: Gråsäl 🔒", url: "#" },
    { name: "Arktis: Snöuggla 🔒", url: "#" },
    { name: "Arktis: Ren 🔒", url: "#" },

    { name: "Oceanien: Känguru 🔒", url: "#" },
    { name: "Oceanien: Koala 🔒", url: "#" },
    { name: "Oceanien: Emu 🔒", url: "#" },
    { name: "Oceanien: Dingo 🔒", url: "#" },

    { name: "Nordamerika: Grizzlybjörn 🔒", url: "#" },
    { name: "Nordamerika: Puma 🔒", url: "#" },
    { name: "Nordamerika: Skallerorm 🔒", url: "#" },
    { name: "Nordamerika: Tvättbjörn 🔒", url: "#" },
    { name: "Nordamerika: Bison 🔒", url: "#" },
    { name: "Nordamerika: Alligator 🔒", url: "#" },
    { name: "Nordamerika: Vitsvanshjort 🔒", url: "#" },

    { name: "Sydamerika: Jaguar 🔒", url: "#" },
    { name: "Sydamerika: Kapybara 🔒", url: "#" },
    { name: "Sydamerika: Anakonda 🔒", url: "#" },
    { name: "Sydamerika: Sengångare 🔒", url: "#" },
    { name: "Sydamerika: Tukan 🔒", url: "#" },
    { name: "Sydamerika: Manat 🔒", url: "#" },
    { name: "Sydamerika: Lama 🔒", url: "#" },

    { name: "Antarktis: Kejsarpingvin 🔒", url: "#" },
    { name: "Antarktis: Leopardsäl 🔒", url: "#" },
    { name: "Antarktis: Albratross 🔒", url: "#" },
    { name: "Antarktis: Blåval 🔒", url: "#" },
    { name: "Antarktis: Adeliepingvin 🔒", url: "#" }

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