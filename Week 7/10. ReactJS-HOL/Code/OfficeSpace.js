import React from 'react'
import './OfficeSpcae.css'

export default function OfficeSpace() {

    const officeSpaces = [
    {
      name: "Alpha Tower",
      rent: 50000,
      address: "Banjara Hills, Hyderabad",
      image: "https://cdn.sanity.io/images/uqxwe2qj/production/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg"
    },
    {
      name: "Beta Plaza",
      rent: 75000,
      address: "MG Road, Bengaluru",
      image: "https://chicagoofficemovers.com/wp-content/uploads/2022/06/modern-office-interior-reduced.jpg"
    },
    {
      name: "Gamma Hub",
      rent: 60000,
      address: "Salt Lake, Kolkata",
      image: "https://butterflymx.com/wp-content/uploads/2022/06/office-space-planning-featured.jpg"
    }
  ]

  const element='Office Space'

  return (
   <div className="container">
      <h1>{element} , At affordable Range</h1>

      {officeSpaces.map((office, index) => (
        <div className="card" key={index}>
          <img src={office.image} alt={office.name} />
          <h1>Name: {office.name}</h1>
          <h3><strong>Address:</strong> {office.address}</h3>
          <h3>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              ₹{office.rent}
            </span>
          </h3>
        </div>
      ))}
    </div>
  )
}
