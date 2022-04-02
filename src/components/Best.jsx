import React from 'react'

import Apt1 from '../assets/apt1.jpeg'
import Apt2 from '../assets/apt2.jpeg'
import Apt3 from '../assets/apt3.jpeg'

import "../components/Best.css"

function Best() {
  return (
    <div className='best'>
    <h1>Find Best Rated Properties</h1>
        <div>
             <p><span className='bold'>All</span></p>
             <p>Commericial</p>
             <p>Residential</p>
             <p>Agricultural</p>
        </div>

        <div className='container'>
            <img src={Apt1}  className=""  alt="Apartment-img" />
            <img src={Apt2}  className=""  alt="Apartment-img" />
            <img src={Apt3}  className=""  alt="Apartment-img" />
        </div>
        <button className='btn'>View All</button>

    </div>
  )
}

export default Best