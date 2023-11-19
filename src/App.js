import React, { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="container">
      <header className="title">
        <h1>Random Number Generator</h1>
        <p>Click the button to generate a random number:</p>
        <button onClick={generateRandomNumber} className="presscontainer">
          Click Me
        </button>
        <div className="randomcontainer">
          <p>Random Number:</p>
        </div>
        <div  >
          {randomNumber !== null && (
            <div>
              <h1>{randomNumber}</h1>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
