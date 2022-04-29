import { useContext } from "react";
import { DisneyCharacter } from "../disney_character"
import { FavouritesContext } from '../App';

interface CharacterProps{
	character: DisneyCharacter;
	updateFavourites: (favourites: Array<number>) => void;
}

// for our props we can reuse the DisneyCharacter interface
// - defining an anonymous type that just has one property - a DisneyCharacter
const Character : React.FC<CharacterProps> = ( { character, updateFavourites }) => { 

  const characterFavourites = useContext(FavouritesContext);  

  let imageSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    imageSrc = ((character.imageUrl.indexOf('/revision') > -1) ? character.imageUrl.substring(0, character.imageUrl.indexOf('/revision')) : character.imageUrl);
  }  

  function toggleFavouriteForCharacter(characterId : number) {
    if(!characterFavourites.includes(characterId)) {
        // add to favourites
        updateFavourites([...characterFavourites, characterId]);
    }
    else {
      // remove from favourites
      const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
      updateFavourites(updatedFavourites);
    }
  }

  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions" onClick={() => toggleFavouriteForCharacter(character._id)}>
      {!characterFavourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
      </div>

      <img className="character-item__img" src={imageSrc} alt={character.name} />

    </article>
  )
}


export default Character