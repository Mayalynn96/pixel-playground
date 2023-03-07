import React from 'react'
import WeatherAppPNG from './assets/weatherHereAndThere.png'
import WeatherAppGIF from './assets/weatherHereAndThere.gif'
import AltPopRockPNG from './assets/altPopRock.png'
import AltPopRockGIF from './assets/altPopRock.gif'
import TheHangmanGame from './assets/theHangmanGame.gif'
import './style.css'
import Project from '../../components/Project'

const Portfolio = () => {
    const projects = [
        {
            url: "https://mayalynn96.github.io/the-hangman-game/",
            repo: "https://github.com/Mayalynn96/the-hangman-game",
            mainLanguage: "JavaScript",
            siteName: "The Hangman Game",
            png: TheHangmanGame,
            gif: TheHangmanGame,
            description: "Solo project: A timed game of Hangman."
        },
        {
            url: "https://mayalynn96.github.io/weather-here-and-there/",
            repo: "https://github.com/Mayalynn96/weather-here-and-there",
            mainLanguage: "JavaScript",
            siteName: "Weather Here and There",
            png: WeatherAppPNG,
            gif: WeatherAppGIF,
            description: "Solo project: A weather tracking website made with Html, Css and JavaScript. Using a wearher API."
        },
        {
            url:"https://mayalynn96.github.io/alt-pop-rock/",
            repo:"https://github.com/Mayalynn96/alt-pop-rock",
            mainLanguage: "JavaScript",
            siteName: "Alt Pop Rock",
            png:AltPopRockPNG,
            gif:AltPopRockGIF,
            description:"Solo project: A timed quiz about music made with Html, Css and JavaScript."
        }
    ]

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <Project projects={projects} />
        </div>
    )
}

export default Portfolio