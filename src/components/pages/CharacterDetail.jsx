import { useParams, Link } from "react-router-dom";
import altImage from "../../images/logo-missing-image.png"

function CharacterDetail({ characters }) {
  const { id } = useParams();

  

  const character = characters.find((item) => item.id === id);

  if (!character) {
    return (
      <div>
        <p>Personaje no encontrado</p>
        <Link to="/">← Volver</Link>
      </div>
    );
  }

  const finalImage = character.image ? character.image : altImage;

  return (
    <>
      <Link to="/">← Volver</Link>

      <div className="detail">
        <img
          className="detail_image"
          src={finalImage}
          alt={character.name}
        />
        <div className="detail_data">
          <p>Nombre: {character.name}</p>
          <p>Casa: {character.house}</p>
          <p>Estado: {character.status ? "Vivo" : "Muerto"}</p>
          <p>Género: {character.gender}</p>
          <p>Especie: {character.species}</p>
          <p>Nombres alternativos: {character.altName}</p>
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
