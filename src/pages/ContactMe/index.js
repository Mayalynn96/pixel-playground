import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './style.css'

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // eslint-disable-next-line
        if (emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            emailjs.sendForm(
                'service_u9lz1vl', 
                'template_6kszi2e', 
                form.current, 
                'vVEFCL3Xd0quic3X3')
                .then((result) => {
                    console.log(result.text);
                    setAlertText('Thank you for sending me a message!');
                    setNameInput('');
                    setEmailInput('');
                    setMessageInput('');
                }, (error) => {
                    console.log(error.text);
                });
        } else if (nameInput.length < 1 || emailInput < 1 || messageInput < 1) {
            setAlertText('All fields must be filled out!')
            // eslint-disable-next-line
        } else if (!emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setAlertText('Please enter a valid email address!')
        }

        setTimeout(() => {
            setAlertText('')
        }, 5000)

    };

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const handleInputChange = (e) => {
        if (e.target.id === 'nameInput') {
            setNameInput(e.target.value)
        } else if (e.target.id === 'emailInput') {
            setEmailInput(e.target.value)
        } else if (e.target.id === 'messageInput') {
            setMessageInput(e.target.value)
        }
    }

    const [alertText, setAlertText] = useState('')

    return (
        <div className='ContactMe'>
            <h1>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div id='nameDiv'>
                    <label htmlFor='nameInput'>Your name: </label>
                    <input name="user_name" id='nameInput' value={nameInput} type='text' placeholder='Name' onChange={handleInputChange}></input>
                </div>
                <div id='emailDiv'>
                    <label htmlFor='emailInput'>Your email: </label>
                    <input name="user_email" id='emailInput' value={emailInput} type='email' placeholder='Email' onChange={handleInputChange}></input>
                </div>
                <div id='messageDiv'>
                    <label htmlFor='messageInput'>Your message: </label>
                    <textarea name="message" id='messageInput' value={messageInput} placeholder='Type your message here' onChange={handleInputChange}></textarea>
                </div>
                <p id='alertText'>{alertText}</p>
                <button type="submit" value="Send" >Submit</button>
            </form>
        </div>
    )
}

export default ContactMe