// Import the React library
import React from "react";

// Import the generated hook from our RTK Query API slice
import { useGetPlayersQuery } from "../../api/puppyBowlApi";

// Import the CSS styles for this component
import '../../index.css'

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useGetPlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <p>Loading . . .</p>
  }

  // Show an error message if the fetch failed
  if (error) {
    return <p>Error loading data {error.message}</p>
  }
console.log("data: ", data)
  // Show the fetched data after it has arrived
  return (
    <div className="players">
      

      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          <img src={player.imageUrl} alt="Puppy Image"></img>          
          <div className="player-details">
            <h2>Name: {player.name} </h2>            
            <p>Breed: {player.breed} </p>            
            <p>Status: {player.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Players;
