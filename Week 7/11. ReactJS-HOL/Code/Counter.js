import React, { useState } from 'react'

export default function Counter () {
    
    const [count,setCount] = useState(0)
    const Increment = () => {
        setCount(count+1)
        sayHello()
    }
    const Decrement = () => {
        setCount(count-1)
    }

    const sayHello = () =>{
        alert("Hello! This is a static message.")
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={Increment}>Increment</button><br/>
        <button onClick={Decrement}>Decrement</button><br/>
    </div>
  )
}
