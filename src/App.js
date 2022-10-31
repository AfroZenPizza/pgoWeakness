import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PokeCard from "./PokeCard.jsx"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form } from 'react-bootstrap';
import GymBox from './GymBox/GymBox.jsx'

function App() {
  const LOCAL_STORAGE_KEY = "pgodex.local"
  const pokeRef = useRef();
  const [pokemonList, setPokemonList] = useState([{ name: "rhyperior", id: uuidv4() }])

  useEffect(() => {
    const loadedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!loadedList) return;
    setPokemonList(loadedList);
  }, [])

  useEffect(() => {
    const storeableList = JSON.stringify(pokemonList);
    localStorage.setItem(LOCAL_STORAGE_KEY, storeableList);
  }, [pokemonList])

  function removePokemon(id) {
    const newPokemonList = pokemonList.filter(item => item.id != id)
    setPokemonList(newPokemonList);
  }
  function handleAddPoke(e) {
    const name = pokeRef.current.value.toLowerCase()
    if (name === '') return
    pokeRef.current.value = null
    if (name.includes(",")) {
      let names = name.split(",")
      let combine = []
      for (let n in names) {
        let strName = names[n].trim();
        combine.push({ id: uuidv4(), name: strName })
      }
      setPokemonList(prevPokemonList => {
        return [...prevPokemonList, ...combine]
      })
      return;
    }
    setPokemonList(prevPokemonList => {
      return [...prevPokemonList, { id: uuidv4(), name: name }]
    })
  }

  function handleRemovePoke() {
    const name = pokeRef.current.value;
    if (name === '') {
      setPokemonList([]);
      return;
    };
    setPokemonList(prevList => {
      return prevList.filter(item => item.name.toLowerCase() != name.toLowerCase())
    })
    pokeRef.current.value = null;
  }

  function handleAddKeyDown(e) {
    if (e.keyCode === 13 && e.ctrlKey) {
      handleRemovePoke();
      return;
    }
    if (e.keyCode === 13) { // Enter/Return pressed
      handleAddPoke(null)
    }
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Stack direction="horizontal" gap={3}>
              <Form.Control ref={pokeRef} onKeyDown={handleAddKeyDown} className="me-auto" placeholder="Pikachu..." />
              <Button onClick={handleAddPoke}>Add</Button>
            </Stack>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Title>Basic Info
              </Card.Title>
              <Card.Text>
                <strong>8:20 -</strong> time to get 50 coins in a gym<br />
                <strong>Meta:</strong> Some pokemon will have attacks that don't match their types. They may be strong against their weakness. <em>beware</em>
              </Card.Text>
            </Card>
          </Col>
          <GymBox />
          <Col md={3}>
            <Card>
              <Card.Title>New Features</Card.Title>
              <Card.Text><strong><kbd>Ctrl</kbd>+<kbd>Enter</kbd></strong> will remove all pokemon with a given name<br />
                Comma seperating pokemon <em>Pikachu, Mew</em> will add each pokemon in the list.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          {pokemonList.map(x => {
            return <Col xxs={12} md={6} lg={3} xl={2}>
              <PokeCard pokemon={x} key={x.id} removePokemon={removePokemon} />
            </Col>
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
