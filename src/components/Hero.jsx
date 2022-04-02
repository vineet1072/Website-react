import React from 'react'
import {GoSearch} from "react-icons/go"
import "../components/Hero.css"

function Hero() {
  


  return (
    <div className='hero'>
    <div className='content'>
        <h1>Find The Perfect Place</h1>
            <p className='search-text'>Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes.</p>
           <form className='search'>

              <div>
              <input type="text" placeholder='Enter your text' className='search-box'/>
              </div>
              
              <div className='radio'>
              <input type="radio" name="choose" checked/>
              <label>Buy</label>
              <input type="radio" name ="choose"/>
              <label>Rent</label>
              <button type='submit'>
                  <GoSearch  className='icon'/>
              </button>
              </div>
            </form>
        </div>
     </div>
  )
}

export default Hero