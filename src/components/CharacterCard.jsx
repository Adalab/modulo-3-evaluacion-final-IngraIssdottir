import altImage from "../images/logo-missing-image.png"

function CharacterCard ({ characterImage, characterName, characterSpecies }) {

    const finalImage = characterImage ? characterImage : altImage;

    return(
        <><img
            className="picture"
            src={finalImage}
            alt={characterName} />
            <p>{characterName}</p>
            <p>{characterSpecies}</p></>
    );
}

export default CharacterCard