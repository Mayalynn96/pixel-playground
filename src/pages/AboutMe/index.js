import React, { useState} from 'react'
import FirstPicture from '../../assets/icons/laptop.png'
import ProfilePicture from '../../assets/icons/laptopWithPicture.png'
import GithubLogo from '../../assets/icons/github.png'
import LinkedinLogo from '../../assets/icons/linkedin.png'
import './style.css'

const AboutMe = () => {
    const [isClicked, setisClicked] = useState(true)

    const handleReadMore = (e) => {
        e.preventDefault()
        setisClicked(!isClicked)
        window.location.href = '#topImage'
    }

    return (
        <div className='aboutMe'>
            {isClicked ? (
                <div className='innerDiv'>
                    <div className='rightSide'>
                        <img id="topImage" src={FirstPicture} alt="Laptop" />
                    </div>
                    <div className='leftSide'>
                        <h1>About Me</h1>
                        <p>My name is Maya Lynn Cohen and I love to code! I was lucky enough to grow up in Europe where I was able to learn a lot about proper work etiquette through buisness school. But a few years after moving back to the US, I decided it was time fo a change and started my Web Developper journey!</p>
                        <p>Some pointers about me:</p>
                        <ul>
                            <li>Very outgoing and open to learn</li>
                            <li>love working in teams but great on my own</li>
                            <li>I live for problem solving</li>
                            <li>Flexible to change</li>
                        </ul>
                       <button onClick={handleReadMore}>Read More</button>
                       
                    </div>
                </div>
            ) : (
                <div className='innerDiv'>
                    <div className='rightSide'>
                        <img id="topImage" src={ProfilePicture} alt="Laptop with Profile" />
                    </div>
                    <div className='leftSide'>
                        <h1>More About Me</h1>
                        <p>I was born in Washington State but shortly after my 3rd birthday my family and I moved to Switzerland. I grew up speaking English, Swiss German and French. After High School I spend 3 years in business school and a 4th year as an administrative assistant. It was during this time that I first discovered my interest in coding on the side of school and work.</p>
                        <p>In 2019, after spending 3 months traveling Europe and the Philippines, I moved back to Washington. Shortly after, the pandemic forced me into unemployment in order to take care of family. After things calmed down I moved to Seattle for a contracting job where I got first hand experience with computer hardware, screen repairs and some other IT work.</p>
                        <p>After learning the basics of html, CSS and JavaScript through free online classes and apps, I realized it was more than just a hobby. In 2022 I signed up for the University Of Washington Web Developer Bootcamp. I was able to learn all the skills in depth and have come further than I imagined in this short time. </p>
                        <p>Vitit my portfolio section to see all my projects. You can send me an email under the contact me tab. And if you'd like to know more about my skills, click the resume tab or go to my GitHub or Linked in below</p>
                        <a href='https://github.com/Mayalynn96' target='_blank' rel="noreferrer">
                        <img src={GithubLogo} className="logo" alt='Github Logo'/>
                        </a>
                        <a href='https://www.linkedin.com/in/maya-lynn-cohen-49845a204' target='_blank' rel="noreferrer">
                        <img src={LinkedinLogo} className="logo" alt='LinkedIn Logo'/><br></br>
                        </a>
                        <button href='#topImage' onClick={handleReadMore}>Go back</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AboutMe