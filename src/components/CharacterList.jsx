import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function CharacterList({ character }) {
  return (
    <li className="card">
      <Link to={`/detail/${character.id}`}>
        <CharacterCard
          characterImage={character.image}
          characterName={character.name}
          characterSpecies={character.species}
        />
      </Link>
    </li>
  );
}

export default CharacterList;
