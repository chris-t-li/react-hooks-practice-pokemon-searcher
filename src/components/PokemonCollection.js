import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonCards }) {

  const allPokemon = pokemonCards.map(pokemon => {
    return (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {allPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
