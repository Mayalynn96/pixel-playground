import React from 'react'
import './style.css'

const Resume = () => {

    return (
        <div className='resume'>
            <h1>Resume</h1>
            <div id='resumeLists'>
            <div>
            <h2>Coding skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap and other frameworks</li>
                <li>MySql and Sequelize</li>
                <li>MongoDB and Mongoose</li>
                <li>Express server settup</li>
                <li>Handlebars</li>
                <li>React</li>
            </ul>
            </div>
            <div>
            <h2>Work Skills:</h2>
            <ul>
                <li>Problem Solving</li>
                <li>Small Project Management</li>
                <li>Attention to detail</li>
                <li>Knoledge Seeking</li>
                <li>Positive Thinking</li>
                <li>High interest and understanding of Math</li>
                <li>Persistence</li>
                <li>Creativity</li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Resume