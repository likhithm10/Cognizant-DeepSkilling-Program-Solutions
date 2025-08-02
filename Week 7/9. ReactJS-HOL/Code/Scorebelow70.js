import React from 'react'
import ListofPlayers from './ListofPlayers'

export default function Scorebelow70({players}) {
    const players70=[]
  return (
    players.map((player, index) => {
        if(player.score<=70)
            players70.push(player)
    }),
<ListofPlayers players={players70}/>
)
}
