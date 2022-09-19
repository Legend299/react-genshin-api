function CharacterCard({ data }) {
  const {
    card_color,
    card_text_color,
    card_image,
    card_main_name,
    card_surname,
    card_element,
    card_weapon,
    card_description,
  } = data;

  return (
    <article
      className={`flex flex-col shadow-xl mx-auto ${card_color} max-w-sm py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md`}
    >
      <div className="min-h-62">
        <img className="mx-auto" src={card_image} alt="" />
      </div>
      <h1 className="font-normal text-2xl mt-28 text-gray-700">
        {card_surname}
      </h1>
      <h2 className={`font-extrabold text-5xl mb-10 ${card_text_color}`}>
        {card_main_name}
      </h2>
      <h2 className="font-bold mb-5 text-gray-800">
        <b className={card_text_color}>{card_element}</b> - {card_weapon}
      </h2>
      <p className="text-lg leading-relaxed text-gray-900">{card_description}</p>
    </article>
  );
}

export default CharacterCard;
