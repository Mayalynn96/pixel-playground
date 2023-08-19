import React, { useState } from 'react'
import ProfilePicture from '../../assets/icons/ProfilePicture.jpg'
import GithubLogo from '../../assets/icons/github.png'
import LinkedinLogo from '../../assets/icons/linkedin.png'
import './style.css'

const AboutMe = () => {
    const [isClicked, setisClicked] = useState(true)

    const handleReadMore = (e) => {
        e.preventDefault()
        setisClicked(!isClicked)
    }

    return (
        <div className='aboutMe'>
            {isClicked ? (
                <div className='innerDiv'>
                    <div>
                        <h1>Maya Lynn Cohen</h1>
                        <p>Full Stack Web Developer and Video Game Enthusiast: Blending Code and Creativity to Shape Digital Realms.</p>
                        <p>Some pointers about me:</p>
                        <ul>
                            <li>Very outgoing</li>
                            <li>Love to learn</li>
                            <li>Goal oriented</li>
                            <li>Problem solving</li>
                            <li>Flexible to change</li>
                        </ul>
                        <button onClick={handleReadMore}>Read More</button>
                    </div>
                    <div>
                        <img id="profilePic" src={ProfilePicture} alt="Profile" />
                    </div>
                </div>
            ) : (
                <div className='moreAboutMe'>
                    <div>
                        <h1>More About Me</h1>
                        <p>Hello there! I'm thrilled to introduce myself as a junior full stack web developer with a unique blend of technical expertise and business acumen. My journey into the world of web development began with a strong foundation in business, where I honed my analytical skills and learned the art of translating complex ideas into actionable strategies.</p>
                        <p>As a driven individual with a passion for problem-solving, I decided to pivot my career towards the realm of technology. Armed with a solid background in business, I embarked on a learning journey that led me to become proficient in both front-end and back-end development. My experience in business has equipped me with a keen understanding of user needs, market trends, and the importance of delivering solutions that not only meet technical requirements but also align with strategic objectives.</p>
                        <p>In the world of web development, I find joy in transforming concepts into interactive and user-friendly websites and applications. I thrive in collaborative environments, where I can contribute my insights and collaborate with designers, developers, and stakeholders to create seamless and visually appealing digital experiences.</p>
                        <p>My technical skill set includes proficiency in HTML, CSS, JavaScript, and various front-end frameworks, as well as back-end technologies like Node.js and databases such as MySQL. I'm constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest industry trends, ensuring that the solutions I create are not only innovative but also sustainable and scalable.</p>
                        <p>When I'm not coding, you'll often find me immersed in the world of video games, where my enthusiasm for technology and creativity intertwine. Just like in game development, I believe that crafting exceptional websites and applications requires attention to detail, adaptability, and a deep understanding of user engagement.</p>
                        <a href='https://github.com/Mayalynn96' target='_blank' rel="noreferrer">
                            <img src={GithubLogo} className="logo" alt='Github Logo' />
                        </a>
                        <a href='https://www.linkedin.com/in/maya-lynn-cohen-49845a204' target='_blank' rel="noreferrer">
                            <img src={LinkedinLogo} className="logo" alt='LinkedIn Logo' /><br></br>
                        </a>
                        <button href='#topImage' onClick={handleReadMore}>Go back</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AboutMe