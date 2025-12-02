import CharacterCard from "./CharacterCard";

function CharacterList ({ character }) {
    return (
        <li className="card">
              <CharacterCard characterImage={character.image} CharacterName={character.name} characterSpecies={character.species}/>
              
          </li>
    );
}

export default CharacterList;