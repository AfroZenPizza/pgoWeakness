import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import PokeCard from "./PokeCard.jsx"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';


function App() {
  const LOCAL_STORAGE_KEY = "todoApp.todos"
  const todoNameRef = useRef();
  const pokeRef = useRef();
  const [todos, setTodos] = useState([]);
  const [pokemonList, setPokemonList] = useState([{ name: "rhyperior", id: uuidv4() }])

  function removePokemon(id) {
    const newPokemonList = pokemonList.filter(item => item.id != id)
    setPokemonList(newPokemonList);
  }
  function handleAddPoke(e) {
    const name = pokeRef.current.value
    if (name === '') return
    setPokemonList(prevPokemonList => {
      return [...prevPokemonList, { id: uuidv4(), name: name }]
    })
    pokeRef.current.value = null
  }
  return (
    <>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} /> */}
      {/* <input ref={todoNameRef} type="text" /> */}
      {/* <button onClick={handleAddTodo}>Add Todo</button> */}
      {/* <button onClick={clearTodos}>Clear Complete</button> */}
      {/* <div>{todos.filter(todo => !todo.complete).length} left to do</div> */}
      <Container fluid>
        <Stack direction="horizontal" gap={3}>
          <Form.Control ref={pokeRef} className="me-auto" placeholder="Pikachu..." />
          <Button onClick={handleAddPoke}>Add</Button>
        </Stack>
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
