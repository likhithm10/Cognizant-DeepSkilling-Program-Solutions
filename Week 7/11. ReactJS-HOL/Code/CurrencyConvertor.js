import React, { useState } from 'react'

export default function CurrencyConvertor() {
    const [rupees, setRupees] = useState('')
    const [curr, setCurr] = useState('')
  const [euros, setEuros] = useState(0)
  const conversionRate = 0.011
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rupees === '' || isNaN(rupees)) {
      alert("Please enter a valid amount");
      return;
    }
    const converted = parseFloat(rupees) * conversionRate;
    setEuros(converted.toFixed(2));
    alert(`Converting to Euro amount is ${euros}`)
  };

  return (
    <div>
         <h2>Currency Converter: </h2>
      <form onSubmit={handleSubmit}>
        Amount: <input
          type="text"
          placeholder="Enter amount in ₹"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        /><br/><br/>
        Currency: <input
          type="text"
          placeholder="Enter Currency type to convert"
          value={curr}
          onChange={(e) => setCurr(e.target.value)}
        /><br/><br/>
        <button type="submit" style={{marginLeft:'70px'}}>Submit</button>
        
      </form>
    </div>
  )
}
