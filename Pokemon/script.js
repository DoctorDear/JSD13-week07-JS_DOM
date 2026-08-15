const progressX = document.getElementById("progressX");
const btnPokemon = document.getElementById("btn-pokemon");
const nameInput = document.getElementById("name-input");
const search = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");

btnPokemon.addEventListener("click", async () => {
    const randomId = Math.floor(Math.random() * 1118) + 1;
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );

    const data = await response.json();
    console.log(data);

    renderPokemonCard(data);
});

search.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameSearch = nameInput.value.trim().toLowerCase();

    if (!nameSearch) return;

    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nameSearch}`,
        );

        if (!response.ok) {
            progressX.innerHTML = `<p style="color: red;">Not found Pokemon: "${nameSearch}"</p>`;
            return;
        }

        const data = await response.json();

        renderPokemonCard(data);
    } catch (error) {
        console.error(error);
        progressX.innerHTML = `<p style="color: red;">Error</p>`;
    }
});

resetBtn.addEventListener("click", () => {
    nameInput.value = "";
    progressX.replaceChildren();
});

function renderPokemonCard(data) {
    const div = document.createElement("div");
    div.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = data.sprites.front_default;

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = data.name;

    div.append(img);
    div.append(nameHeading);

    progressX.replaceChildren();
    progressX.appendChild(div);
}
