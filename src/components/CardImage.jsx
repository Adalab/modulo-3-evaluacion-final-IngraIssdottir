import altImage from "../images/logo-missing-image.png"

function CardImage ({ characterImage, characterName }) {

    const finalImage = characterImage ? characterImage : altImage;

    return(
        <img 
        className="picture"
        src={finalImage}
        alt={characterName} />
    );
}

export default CardImage