import React from "react";
import Players from "./features/players/Players";

function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <>
      <h1>Puppy Bowl Event!!!</h1>
        <Players />
    </>
  );
}
// Export the App component as the default export
export default App;
