import React from 'react';
import '../assets/styles/contact.scss'

const Contact = (props) =>{
    return (
        <div>
            <form action="POST">
                <div className = 'block'>
                    <input className='name' onChange = {props.dispatch({type : 'SET-NAME'})}
                        value = {props.data.contact_form.name.value} 
                        type={props.data.contact_form.name.type} 
                        placeholder = {props.data.contact_form.name.placeholder} />
                    <input className='email' onChange = {props.dispatch({type : 'SET-EMAIL'})}
                        value = {props.data.contact_form.email.value} 
                        type={props.data.contact_form.email.type} 
                        placeholder = {props.data.contact_form.email.placeholder} />
                    <textarea className='message' onChange = {props.dispatch({type : 'SET-TEXT'})}
                        value = {props.data.contact_form.textarea.value} 
                        placeholder = {props.data.contact_form.textarea.placeholder}>
                    </textarea>
                    <button className='submitBtn' type = 'submit'>{props.data.contact_form.button.value}</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;