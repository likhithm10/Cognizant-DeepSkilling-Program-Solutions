import React from 'react'

export default function SayWelcome() {
  const handleWelcome = (msg) => {
    alert(`Message: ${msg}`);
  }
  return (
    <div>
        <br/><button onClick={()=>handleWelcome("Welcome")}>Say Welcome</button>
    </div>
  )
}
