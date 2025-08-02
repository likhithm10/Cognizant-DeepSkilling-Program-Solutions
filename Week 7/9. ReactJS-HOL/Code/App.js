import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import Scorebelow70 from './Components/Scorebelow70';
import { OddPlayers } from './Components/OddPlayers';
import { EvenPlayers } from './Components/EvenPlayers';
import MergePlayers from './Components/MergePlayers';

function App() {
  
  const flag = true;

  const players = [
    { name: "Sachin", score: 99 },
    { name: "Dhoni", score: 85 },
    { name: "Virat", score: 60 },
    { name: "Rohit", score: 70 },
    { name: "Gill", score: 30 },
    { name: "Rahul", score: 80 },
    { name: "Pant", score: 40 },
    { name: "Hardik", score: 65 },
    { name: "Ashwin", score: 55 },
    { name: "Bumrah", score: 75 },
    { name: "Shami", score: 35 }
  ];

  const IndianTeam = ["Sachin", "Dhoni", "Virat", "Rohit", "Gill"];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } 
  else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          {OddPlayers(IndianTeam)}

          <hr />
          <h2>Even Players</h2>
          {EvenPlayers(IndianTeam)}

        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <MergePlayers/>
        </div>
      </div>
    );
  }
}

export default App;
