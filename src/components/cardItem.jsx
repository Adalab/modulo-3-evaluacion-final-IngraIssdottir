import CardImage from "./CardImage";

function CardItem ({ character }) {
    return (
        <li className="card">
              <CardImage characterImage={character.image} CharacterName={character.name} />
              <p>Nombre: {character.name}</p>
              <p>Especie: {character.species}</p>
          </li>
    );
}

export default CardItem;