const Card = ({burgerCard}) => {
  return (
    <div className="product-card">
      <img src={burgerCard.imageUrl} alt="" />
      <div className="description">
        <h1 id="product-name">{burgerCard.name}</h1>
        <p>{burgerCard.description}</p>
        <h2>{burgerCard.price}</h2>
        <h3>Ratings : {burgerCard.rating}</h3>
        <div className="sizes">
          {burgerCard.sizes.map((curEle) => (
            <button>{curEle}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
