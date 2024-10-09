import Card from "./Card.jsx"
function App() {
  const burgerCard = {
    name: "Classic Cheeseburger",
    description:
      "A delicious beef patty topped with melted cheese, fresh lettuce, tomatoes, onions, and a tangy sauce, all in a toasted sesame bun.",
    price: "$8.99",
    imageUrl:
      "https://img.freepik.com/free-photo/view-3d-delicious-looking-burger_23-2150914673.jpg?t=st=1728187511~exp=1728191111~hmac=aea0c26d981023cc0aeeb94158f6feaed319181c253badb23b19d2ba8e4fb6fa&w=740",
    rating: 4.5,
    sizes: ["Small", "Medium", "Large"],
  };

  return <Card burgerCard={burgerCard} />;
}

export default App;
