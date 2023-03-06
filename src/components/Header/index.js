import React,{useState} from 'react'
import './style.css'

const Header = (props) => {
  const [tabClass, setTabClass] = useState({
    "aboutMe":"current",
    "portfolio":"",
    "contactMe":"",
    "resume":"",
  })

  const handleTabChange = (e) => {
    e.preventDefault()

    let aboutMe = "";
    let portfolio = "";
    let contactMe = "";
    let resume = ""

    if(e.target.id==="aboutMe"){
      aboutMe = "current"
    } else if(e.target.id==="portfolio"){
      portfolio = "current"
    } else if(e.target.id==="contactMe"){
      contactMe = "current"
    } else if(e.target.id==="resume"){
      resume = "current"
    }

    props.setCurrentTab(e.target.id)

    setTabClass({
      "aboutMe":aboutMe,
      "portfolio":portfolio,
      "contactMe":contactMe,
      "resume":resume,
      })
  }

  return (
    <header className="header">
        <div>
            <h1>Pixel Playground</h1>
            <h2>By Maya Lynn Cohen</h2>
        </div>
        <div className='navBar'>
            <h3 className={tabClass.aboutMe} id="aboutMe" onClick={handleTabChange}>About Me</h3>
            <h3 className={tabClass.portfolio} id="portfolio" onClick={handleTabChange}>Portfolio</h3>
            <h3 className={tabClass.contactMe} id="contactMe" onClick={handleTabChange}>Contact Me</h3>
            <h3 className={tabClass.resume} id="resume" onClick={handleTabChange}>Resume</h3>
        </div>
    </header>
  )
}

export default Header