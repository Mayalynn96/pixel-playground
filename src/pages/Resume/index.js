import React from 'react'
import './style.css'
import MayaLynnCohenResume from './MayaLynnCohenResume2023.pdf'

const Resume = () => {

    return (
        <div className='resume'>
            <h1>Resume</h1>
            <a href={MayaLynnCohenResume} download="MayaLynnCohenResume.pdf">Download</a>
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
                <li>Express server setup</li>
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
                <li>Knowledge Seeking</li>
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