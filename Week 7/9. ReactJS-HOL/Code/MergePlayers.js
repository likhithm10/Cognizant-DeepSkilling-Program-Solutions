import React from 'react'

export default function MergePlayers() {

    const T20Players = ['First Player', 'Second Player', 'Third Player'];
    const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

     const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    IndianPlayers.map((player, index) => (
        <li key={index}>
            Mr. {player} 
        </li>
      ))
  )
}




