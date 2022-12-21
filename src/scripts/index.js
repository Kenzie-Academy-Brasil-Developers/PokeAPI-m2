async function renderizaPokemons() {
  const ulTag = document.querySelector("ul");

  const listaDePokemons = await consomePokeAPI();

  listaDePokemons.results.forEach((pokemon) => {
    const numeroNaPokedex = pokemon.url.slice(34, -1);

    ulTag.insertAdjacentHTML(
      "beforeend",
      `
            <li class="listaPokemons">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
            </li>
        `
    );
  });
}

renderizaPokemons();

const barraPesquisar = document.querySelector(".barraPesquisar");
const botaoPesquisar = document.querySelector(".botaoPesquisar");
const ulPoke = document.querySelector("ul");
botaoPesquisar.addEventListener("click", async (element) => {
  ulPoke.innerHTML = "";
  const pokemons = await consomePokeAPI();
  const allPokes = pokemons.results.forEach((pokemon) => {
    if (barraPesquisar.value == "") {
      const numeroNaPokedex = pokemon.url.slice(34, -1);

      ulPoke.insertAdjacentHTML(
        "beforeend",
        `
                <li class="listaPokemons">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                    <h3>${pokemon.name}</h3>
                </li>
            `
      );
    }

    if (barraPesquisar.value === pokemon.name) {
      const numeroNaPokedex = pokemon.url.slice(34, -1);

      ulPoke.insertAdjacentHTML(
        "beforeend",
        `
            <li class="listaPokemons">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
            </li>
        `
      );
    }
  });
});
