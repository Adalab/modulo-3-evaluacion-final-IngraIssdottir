import "../styles/App.scss";

import logoHeader from "../images/logo-header.png"

import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
    .then(response =>response.json())
    .then((data) => {
      const cleanCharacters = data.map((eachCharacter) => ({
        //datos principales
        id: eachCharacter.id,
        img: eachCharacter.image,
        name: eachCharacter.name,
        species: eachCharacter.species,
        //datos página detalle
        altName: eachCharacter.alternate_name,
        house: eachCharacter.house,
        status: eachCharacter.alive,
        gender: eachCharacter.gender

      }));

      setCharacters(cleanCharacters);

    });
  },
  []);

  return (
    <div>
      <header className="header">
        <img className="hp_logo" src={logoHeader} alt="Logo de Harry Potter" />
      </header>

      <main className="main">


        <form action="">

          <div className="name_filter">
            <p>Buscar por nombre: </p>
            <input type="text" />
            <button>Buscar</button>
          </div>

          <div className="house_filter">
            <p>Buscar por casa: </p>
            <select name="" id="">
              <option value="All">All</option>
              <option value="Griffindor">Griffindor</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slythering">Slythering</option>
            </select>
          </div>

        </form>
        
        <ul className="card_mother">
          {characters.map((character) => (
            <li className="card">
              <img className="picture" src={character.img} alt="" />
              <p>Nombre: {character.name}</p>
              <p>Especie: {character.species}</p>
          </li>
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
