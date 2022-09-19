import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import Loading from './Loading';

import { cardColors, cardTextColors } from './Colors'

import CharacterCard from './CharacterCard';

function CharacterList() {
  const { character, character_image, loading } = useContext(CharacterContext);

  if (!loading) return <Loading />;

  return (
    <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
      <section class="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
        <CharacterCard
          data={{
            card_color: 'bg-gray-100',
            card_text_color: 'text-gray-600',
            card_image:
              'https://api.genshin.dev/characters/traveler-anemo/portrait',
            card_main_name: '???',
            card_surname: '???',
            card_element: '???',
            card_weapon: '???',
            card_description: `???`,
          }}
        />

        {character.map((character, index) => (
          <CharacterCard
            data={{
              card_color: cardColors(character.vision),
              card_text_color: cardTextColors(character.vision),
              card_image: character_image[index] !== '404' ? character_image[index] : 'https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Item_Unknown.png',
              card_main_name: character.name,
              card_surname: character.title ? character.title : '???',
              card_element: character.vision,
              card_weapon: character.weapon,
              card_description: character.description ? character.description : '???',
            }}
          />
        ))}
      </section>
    </section>
  );
}

export default CharacterList;
