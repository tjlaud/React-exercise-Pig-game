import "./App.css";
import PlayerPanel from "./components/PlayerPanel";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <button className="btn-new">New game</button>
        <button className="btn-roll">Roll dice</button>
        <button class="btn-hold">Hold</button>
        <h1>Pig Game</h1>
        <PlayerPanel playerNumber="1" />
        <PlayerPanel playerNumber="2" />
        <Dice />
        <Dice />
      </div>
    </div>
  );
}

export default App;

// Bring the Pig Game into this and turn it into a React app

// Background = app
// Heading    = app
// Player panel = component
// Dice       = component
// New game button = app?
// Roll button =  app?
