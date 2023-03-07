import React from 'react'
import GithubLogo from '../../assets/icons/github.png'
import WebLogo from '../../assets/icons/web.png'
import './style.css'

const Project = (props) => {
    let side;
    if (props.index % 2 === 0) {
        side = 'projectContainerLeft'
    } else {
        side = 'projectContainerRight'
    }
    return (
        <div key={props.index} className={side}>
            <img className="projectImg" src={props.project.gif} alt={props.project.siteName} />
            <div className='info'>
                <h2>{props.project.siteName}</h2>
                <h3>{props.project.mainLanguage}</h3>
                <p>{props.project.description}</p>
                <div>
                    <a href={props.project.repo} target='_blank' rel="noreferrer">
                        <img src={GithubLogo} className="logo" alt='Github Logo' />
                    </a>
                    <a href={props.project.url} target='_blank' rel="noreferrer">
                        <img src={WebLogo} className="logo" alt='Web Logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project