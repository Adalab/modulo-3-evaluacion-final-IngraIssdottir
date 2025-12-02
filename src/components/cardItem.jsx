function CardItem ({ character }) {
    return (
        <li className="card">
              <img className="picture" src={character.img} alt="" />
              <p>Nombre: {character.name}</p>
              <p>Especie: {character.species}</p>
          </li>
    )
}

export default CardItem;