import React,{useState} from 'react'
import './style.css'

const ContactMe = () => {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const handleInputChange = (e) => {
        if(e.target.id==='nameInput'){
            setNameInput(e.target.value)
        } else if (e.target.id==='emailInput'){
            setEmailInput(e.target.value)
        } else if (e.target.id==='messageInput'){
            setMessageInput(e.target.value)
        }
    }

    const [alertText, setAlertText] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // eslint-disable-next-line
        if(emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            setAlertText('Thank you for trying to send me a message! Saddly this functionality is not yet set into place...')
        } else if(nameInput.length < 1 || emailInput  < 1|| messageInput  < 1) {
            setAlertText('All fields must be filled out!')
            // eslint-disable-next-line
        } else if(!emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setAlertText('Please enter a valid email address!')
        } 
    }

  return (
    <div className='ContactMe'>
        <h1>Contact Me</h1>
        <form>
            <div id='nameDiv'>
            <label htmlFor='nameInput'>Your name: </label>
            <input id='nameInput' value={nameInput} type='text' placeholder='Name' onChange={handleInputChange}></input>
            </div>
            <div id='emailDiv'>
            <label htmlFor='emailInput'>Your email: </label>
            <input id='emailInput' value={emailInput} type='text' placeholder='Email' onChange={handleInputChange}></input>
            </div>
            <div id='messageDiv'>
            <label htmlFor='messageInput'>Your message: </label>
            <textarea id='messageInput' value={messageInput} placeholder='Type your message here' onChange={handleInputChange}></textarea>
            </div>
            <p id='alertText'>{alertText}</p>
            <button onClick={handleFormSubmit} >Submit</button>
        </form>
    </div>
  )
}

export default ContactMe