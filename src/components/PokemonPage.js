import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [searchQuery, setSearchQeury] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(allpokemon => {
        !searchQuery ? setPokemonCards(allpokemon) : setPokemonCards(allpokemon.filter(pokemon => pokemon.name.includes(searchQuery)))
      })
  }, [searchQuery])

  function handleSearch(e) {
    setSearchQeury(e.target.value);
  }

  function addNewPokemon(newPokemon) {
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...newPokemon, "sprites": { "front": newPokemon.frontUrl, "back": newPokemon.backUrl } })
    })
      .then(res => res.json())
      .then(newPokemon => {
        setPokemonCards([newPokemon, ...pokemonCards])
      })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon} />
      <br />
      <Search handleSearch={handleSearch} searchQuery={searchQuery} />
      <br />
      <PokemonCollection pokemonCards={pokemonCards} setPokemonCards={setPokemonCards} />
    </Container>
  );
}

export default PokemonPage;
