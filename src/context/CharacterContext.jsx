import { createContext, useState, useEffect } from 'react';
import { characterList } from '../routes';

export const CharacterContext = createContext();

export function CharacterContextProvider(props) {
  const [character, setCharacter] = useState([]);
  const [character_image, setCharacterimage] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    var response = [];
    var response_images = [];
    const res = await fetch(characterList());
    const firstData = await res.json();
    for (let index = 0; index < firstData.length; index++) {
      const res = await fetch(characterList() + '/' + firstData[index]);
      const res_data = await res.json();

      const res_image = await fetch(
        characterList() + '/' + firstData[index] + '/gacha-splash'
      );
      const res_image_url = await res_image.url;

      response.push(res_data);
      response_images.push(res_image_url);
    }
    setCharacter(response);
    setCharacterimage(response_images);
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        character_image,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
}