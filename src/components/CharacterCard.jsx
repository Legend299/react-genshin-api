import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';

function CharacterCard() {
  const { character, character_image } = useContext(CharacterContext);
  return (
    <div className="grid grid-cols-3 gap-5">
      {character.map((item, index) => (
        <div key={index} className='bg-gray-800 text-white p-4 rounded-xl text-center hover:border-white border-transparent border-2'>
          <h1 className='text-xl font-bold capitalize mb-5'>{item.name}</h1>
          <img className='max-w-xs h-auto m-auto mb-10' src={character_image[index]} alt={item.name + '_gacha_image'} />
          <p className='text-white text-base mb-10'>
            {item.description
              ? item.description
              : 'No se encontró una descripción'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CharacterCard;
