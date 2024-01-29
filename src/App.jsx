import "./App.css";

import player from "./datasheet";

function App() {
  return (
    <>
      <div className="background">
        <div className="container">
          <h1>{player[2]}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
