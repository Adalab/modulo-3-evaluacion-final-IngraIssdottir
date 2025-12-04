import { useParams, Link } from "react-router-dom";
import altImage from "../../images/logo-missing-image.png";
import { FaHeartbeat } from "react-icons/fa";
import { IoSkull } from "react-icons/io5";
import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";

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

  function isAlive(status) {
    if (status === true) {
      return <FaHeartbeat className="alive_icon"/>
    }else{
      return <IoSkull className="dead_icon"/>
    }
  }

  function genderReveal(gender) {
    if (gender === "female") {
      return <IoMdFemale className="is_a_girl" />
    }else{
      return <IoMdMale className="is_a_boy" />
    }
  }

  return (
    <>
      <div className="detail">
        <div className="back">
          <h2>{character.name}</h2>
          <Link to="/">×</Link>
        </div>
        <div className="detail_card_data">
          <img className="detail_image" src={finalImage} alt={character.name} />
          <div className="detail_data">
            <p>Casa: {character.house}</p>
            <p>Estado: {isAlive(character.status)}</p>
            <p>Género: {genderReveal(character.gender)}</p>
            <p>Especie: {character.species}</p>
            <p>Nombres alternativos: {character.altName}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
