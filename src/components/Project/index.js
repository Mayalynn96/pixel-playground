import React from 'react'
import GithubLogo from '../../assets/icons/github.png'
import WebLogo from '../../assets/icons/web.png'
import './style.css'

const Project = (props) => {
    return (
        <div className='allProjects'>
            {props.projects.map((project, index) => {
                let side;
                if(index%2===0){
                    side='projectContainerLeft'
                } else {
                    side='projectContainerRight'
                }
                return (
                    <div key={index} className={side}>
                        <img className="projectImg" src={project.gif} alt={project.siteName}/>
                        <div className='info'>
                            <h2>{project.siteName}</h2>
                            <h3>{project.mainLanguage}</h3>
                            <p>{project.description}</p>
                            <div>
                                <a href={project.repo} target='_blank' rel="noreferrer">
                                    <img src={GithubLogo} className="logo" alt='Github Logo' />
                                </a>
                                <a href={project.url} target='_blank' rel="noreferrer">
                                    <img src={WebLogo} className="logo" alt='Web Logo' />
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Project