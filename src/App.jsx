import React from "react";
import Players from "./features/players/Players";

function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <>
      <h1 className="header">Puppy Bowl Event!!!</h1>
      <p className="intro">Come and join us for a fun-filled day of adaorable pupy football!</p>
      <p className="intro">Get ready to mee the talented pups competing in this year's Puppy Bowl... and here they are:</p>
        <Players />
    </>
  );
}
// Export the App component as the default export
export default App;
