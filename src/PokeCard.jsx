import PokeAPI from "pokeapi-typescript";
import React, { useState, useRef, useEffect } from "react";
import PokeTypeList from "./PokeCard/PokeTypeList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import TypeIndicator from "./PokeCard/TypeIndicator";
import iconStyles from "./icons/icons.module.css";

export default function PokeCard({ pokemon, removePokemon }) {
  const nameRef = useRef();
  const [pname, setName] = useState("...");
  const [types, setTypes] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState("");

  useEffect(() => {
    PokeAPI.Pokemon.resolve(pokemon.name).then(
      (result) => {
        const mappedTypes = result.types.map((x) => x.type.name);
        setPokemonSprite(
          `https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${result.id}.svg`
        );
        setName(result.name);
        setTypes(mappedTypes);
      },
      (result) => {
        console.log(result);
        setPokemonSprite(
          "https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/201-question.svg"
        );
        setName(`missing ${pokemon.name}`);
      }
    );
  }, []);
  function handleRemove(e) {
    removePokemon(pokemon.id);
  }
  return (
    <Card className={iconStyles[types[0]]}>
      <CloseButton
        style={{ position: "absolute", top: "6px", right: "6px" }}
        onClick={handleRemove}
      />
      <Card.Img
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.66)",
          height: "200px",
        }}
        variant="top"
        src={pokemonSprite}
      />
      <TypeIndicator typeList={types} />
      <Card.Body>
        <Card.Title ref={nameRef}>
          {pname[0].toUpperCase() + pname.slice(1)}
        </Card.Title>
        <PokeTypeList PokeType={types} />
      </Card.Body>
    </Card>
  );
}
