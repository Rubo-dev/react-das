import React from 'react';
import '../assets/styles/contact.scss';
import { handleEmailChangeActionCreator, handleNameChangeActionCreator, handleTextChangeActionCreator } from '../redux/store';



const Contact = (props) =>{
    const handleNameChange = (newName) =>{
        props.dispatch(handleNameChangeActionCreator(newName)) 
    }
    const handleEmailChange = (newEmail) =>{
        props.dispatch(handleEmailChangeActionCreator(newEmail)) 
    }
    const handleTextChange = (newText) =>{
        props.dispatch(handleTextChangeActionCreator(newText)) 
    }

    return (
        <div>
            <form action="POST">
                <div className = 'block'>
                    <input className='name' onChange = {handleNameChange}
                        type={props.data.contact_form.name.type} 
                        placeholder = {props.data.contact_form.name.placeholder} 
                        />
                    <input className='email' onChange = {handleEmailChange}
                        type={props.data.contact_form.email.type} 
                        placeholder = {props.data.contact_form.email.placeholder} 
                        />
                    <textarea className='message' onChange = {handleTextChange}
                        placeholder = {props.data.contact_form.textarea.placeholder}
                        >
                    </textarea>
                    <button className='submitBtn' type = 'submit'>{props.data.contact_form.button.value}</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;