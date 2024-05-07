const ItemList = (data) => {
  const { itemCards } = data?.card;
  return (
    <div>
      {itemCards.map((card) => (
        <div
          key={card.card.info.id}
          className="p-2 m-2 text-left border-gray-200"
        >
          <div>
            {card.card.info.name}
            {" ₹ " +
              (card.card.info.price / 100 || card.card.info.defaultPrice / 100)}
          </div>
          <div>
            <p className="text-xs">{card.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
