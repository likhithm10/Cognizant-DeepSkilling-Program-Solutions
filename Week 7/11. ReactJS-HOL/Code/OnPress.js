import React from 'react'

export default function OnPress() {

    const handleClick = () => {
    alert("I was clicked");
  }
  return (
    <div>
        <br/><button onClick={handleClick}>Click Me</button>
    </div>
  )
}
