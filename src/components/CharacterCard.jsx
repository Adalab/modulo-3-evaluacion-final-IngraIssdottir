import altImage from "../images/logo-missing-image.png"

function CharacterCard ({ characterImage, characterName, characterSpecies }) {

    const finalImage = characterImage ? characterImage : altImage;

    return(
        <><img
            className="picture"
            src={finalImage}
            alt={characterName} />
            <h3>{characterName}</h3>
            <p>{characterSpecies}</p></>
    );
}

export default CharacterCard