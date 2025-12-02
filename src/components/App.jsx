import "../styles/App.scss";

import { useEffect } from "react";
import { useState } from "react";

import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";

function App() {

  const [characters, setCharacters] = useState([]);

  const [searchName, setSearchName] = useState ("");
  const[searchHouse, setSearchHouse] = useState ("Gryffindor");

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchHouse = (ev) => {
    setSearchHouse(ev.target.value);
  };

  const filteredCharacters = characters
    .filter((eachCharacter) =>
      eachCharacter.name
      .toLocaleLowerCase()
      .includes(searchName.toLocaleLowerCase())
  )
    .filter((eachCharacter) => 
  searchHouse === "" ? true : eachCharacter.house === searchHouse
);


  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
    .then(response =>response.json())
    .then((data) => {
      const cleanCharacters = data.map((eachCharacter) => ({
        //datos principales
        id: eachCharacter.id,
        image: eachCharacter.image,
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
      
      <Header />

      <main className="main">


        <Filters
        searchName={searchName}
        handleSearchName={handleSearchName}
        searchHouse={searchHouse}
        handleSearchHouse={handleSearchHouse} />
        
        <ul className="card_mother">
          {filteredCharacters.map((character) => (
            
          <CharacterList key={character.id} character={character}/>))
          }
          
        </ul>
      </main>
    </div>
  );
}

export default App;
