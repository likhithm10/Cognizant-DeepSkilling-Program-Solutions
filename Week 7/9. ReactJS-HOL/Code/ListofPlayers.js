import React from 'react'

export default function ListofPlayers({players}) {
  return (
    players.map((player, index) => (
        <li key={index}>
            Mr. {player.name} <span>{player.score}</span>
        </li>
      ))
  )
}
