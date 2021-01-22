//<----- Import React {useState, useEffect} ----->
import React, { useState, useEffect } from 'react';
//<----- Import style sheet App.css ----->
import './App.css';
//<----- import styled components ----->
import styled from 'styled-components';
//<----- Import axios ----->
import axios from 'axios';
//<----- Import character.js ----->
import Character from './components/Character'
//<----- Import base url ----->
import {BASE_URL} from './Constants/secret'


// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.
// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
const App = () => {
  //setting the states-fecthing data using from api using axios
  const [character, setCharacter] = useState([]);

  useEffect (() =>{
    axios
    .get(`${BASE_URL}/character`)
    .then((response =>{
      console.log(response);
      setCharacter(response.data.results);
    }))
    .catch((error) =>{
      console.log('Opps! something went wrong! Please try aging!', error);
    })
  }, []);

  const CharacterList = (props) => (
    <div className="characterList"> 
       {character.map((char) =>
            { 
              return <CharacterList key={char.id} character={char}/>
            } 
        )}
    </div>
  );

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList>
      </CharacterList>
      
    </div>
  );
}

export default App;
