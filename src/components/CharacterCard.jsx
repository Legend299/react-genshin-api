import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import Loading from './Loading';

function CharacterCard() {
  const { character, character_image, loading } = useContext(CharacterContext);

  console.log(character);

  if (!loading) return <Loading />;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {character.map((item, index) => (
          <div className="overflow-hidden rounded-2xl bg-gray-50">
            <img
              className="object-top w-full bg-slate-800"
              src={character_image[index]}
              alt={item.name + '_gacha_image'}
            />

            <div className="p-6">
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <div>
                  <p className="text-gray-400 mb-4">
                    {item.affiliation} • {item.nation}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold bg-slate-700 rounded-xl inline text-white p-2">
                    {item.name}
                  </h2>
                </div>
                <span className="mt-2 inline-block rounded-full p-3 text-lg font-medium text-black">
                  {item.vision}
                </span>
              </div>

              <hr className="mt-4 mb-4" />

              <div className="flex flex-wrap justify-between">
                <p className="inline-flex items-center">
                  <span className="ml-2 text-gray-600">
                    {item.description
                      ? item.description
                      : 'No se encontró una descripción'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterCard;
