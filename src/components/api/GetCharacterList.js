import { useState, useEffect } from 'react';
import { characterList } from './apiRoutes';

const GetCharacterList = () => {
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
      const depData = await res.json();

      const res_image = await fetch(
        characterList() + '/' + firstData[index] + '/gacha-splash'
      );
      const depData_image = await res_image.url;

      response.push(depData);
      response_images.push(depData_image);
    }
    setCharacter(response);
    setCharacterimage(response_images);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {character.map((item, index) => (
        <div className="col">
          <div className="card h-40">
            <img
              src={character_image[index]}
              className="card-img-top"
              alt={item.name + '_gacha_image'}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                {item.description
                  ? item.description
                  : 'No se encontró una descripción'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetCharacterList;
