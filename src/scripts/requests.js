


async function consomePokeAPI() {
  const containerLoading = document.querySelector(".containerLoading");

  const pokemonsDaAPI = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
   

    containerLoading.classList.add("close")

  return pokemonsDaAPI;
}

consomePokeAPI();


