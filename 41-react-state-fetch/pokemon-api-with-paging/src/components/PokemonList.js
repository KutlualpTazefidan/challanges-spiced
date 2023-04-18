import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemonData, setPokemon] = useState();
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const pokemonData = await response.json();
        setPokemon(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  function nextPage() {
    setPage(pokemonData.next);
  }
  function previousPage() {
    setPage(pokemonData.previous);
  }

  return (
    <main>
      <button type="button" onClick={() => previousPage()}>
        Previous Page
      </button>
      <button type="button" onClick={() => nextPage()}>
        Next Page
      </button>
      <ul>
        {pokemonData?.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
