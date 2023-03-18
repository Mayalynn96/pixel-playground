import React from 'react'
import WeatherAppPNG from './assets/weatherHereAndThere.png'
import WeatherAppGIF from './assets/weatherHereAndThere.gif'
import AltPopRockPNG from './assets/altPopRock.png'
import AltPopRockGIF from './assets/altPopRock.gif'
import TheHangmanGame from './assets/theHangmanGame.gif'
import AnomaDramaLlama from './assets/anomaDramaLlama.gif'
import DontWakeUp from './assets/dontWakeUp.gif'
import LifeIsShort from './assets/lifeIsShort.gif'
import GamerPad from './assets/GamerPad.gif'
import './style.css'
import Project from '../../components/Project'

const Portfolio = () => {
    const projects = [
        {
            url: "https://gamerpad.herokuapp.com/",
            repo: "https://github.com/maximusDecimalusMeridius/gamerPad-frontend",
            mainLanguage: "REACT",
            siteName: "GamerPad",
            png: GamerPad,
            gif: GamerPad,
            description: "Group Project: a social media platform designed by gamers for gamers, where the community can find friends, see all their games and acocunts, and leave detailed notes about their adventures for themselves or their friends."
        },
        {
            url: "https://claricetran.github.io/dont-wake-up/mainGame.html",
            repo: "https://github.com/claricetran/dont-wake-up",
            mainLanguage: "JavaScript",
            siteName: "Don't Wake Up",
            png: DontWakeUp,
            gif: DontWakeUp,
            description: "Group project: A story based RPG game in which we traverse to a players dream and follow their quest to find their lost pet pig."
        },
        {
            url: "https://mayalynn96.github.io/lifeIsShort/",
            repo: "https://github.com/Mayalynn96/lifeIsShort",
            mainLanguage: "REACT",
            siteName: "Life is Short",
            png: LifeIsShort,
            gif: LifeIsShort,
            description: "Solo project: A localstorage based bucketlist tracker."
        },
        {
            url: "https://anomallama.herokuapp.com",
            repo: "https://github.com/alexh3422/Anoma_Drama_Llama",
            mainLanguage: "JavaScript, SQL and Handlebars",
            siteName: "Anoma Drama Llama",
            png: AnomaDramaLlama,
            gif: AnomaDramaLlama,
            description: "Group project: A mood tracker and an online journal with social media and virtual pet features."
        },
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
            url: "https://mayalynn96.github.io/alt-pop-rock/",
            repo: "https://github.com/Mayalynn96/alt-pop-rock",
            mainLanguage: "JavaScript",
            siteName: "Alt Pop Rock",
            png: AltPopRockPNG,
            gif: AltPopRockGIF,
            description: "Solo project: A timed quiz about music made with Html, Css and JavaScript."
        }
    ]

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <div className='allProjects'>
                {projects.map((project, index) => <Project project={project} index={index} key={index}/>)}
            </div>
        </div>
    )
}

export default Portfolio