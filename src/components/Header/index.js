import React from 'react'
import './style.css'

const Header = () => {
  return (
    <header className="header">
        <div>
            <h1>Pixel Playground</h1>
            <h2>By Maya Lynn Cohen</h2>
        </div>
        <div className='navBar'>
            <h3>About Me</h3>
            <h3>Portfolio</h3>
            <h3>Contact Me</h3>
            <h3>Resume</h3>
        </div>
    </header>
  )
}

export default Header