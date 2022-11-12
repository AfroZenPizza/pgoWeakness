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
  const cardImageRef = useRef();
  const [pname, setName] = useState("...");
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonSprite, setPokemonSprite] = useState(
    "https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/201-question.svg"
  );

  useEffect(() => {
    PokeAPI.Pokemon.resolve(pokemon.name)
      .then(
        (result) => {
          const mappedTypes = result.types.map((x) => x.type.name);
          fetch(
            `https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${result.id}.svg`
          )
            .then((response) => response.blob())
            .then((imageBlob) => {
              setPokemonSprite(URL.createObjectURL(imageBlob));
              setLoading(false);
            });
          setName(result.name);
          setTypes(mappedTypes);
        },
        (result) => {
          setName(`missing ${pokemon.name}`);
          setLoading(false);
        }
      )
      .finally();
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
      <div className={iconStyles.cardHeader}>
        <Card.Img
          style={{
            height: "200px",
          }}
          ref={cardImageRef}
          className={loading ? iconStyles.loadingImage : ""}
          variant="top"
          src={pokemonSprite}
        />
      </div>
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
