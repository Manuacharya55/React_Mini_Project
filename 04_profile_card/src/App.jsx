import Card from "./Card";
import players from "./players.js";
function App() {
  return (
    <>
    <h1>Players Card List</h1>
    <div className="card-container">
      {players.map((curPlayer) => {
        return (
          <Card
            img={curPlayer.img}
            name={curPlayer.name}
            role={curPlayer.role}
            team={curPlayer.team}
          />
        );
      })}
    </div>
    </>
  );
}

export default App;
