import React from 'react';


const Contact = (props) =>{
    return (
        <div>
            <form action="">
                <input onChange = {props.setName}
                    value = {props.data.contact_form.name.value} 
                    type={props.data.contact_form.name.type} 
                    placeholder = {props.data.contact_form.name.placeholder} />
                <input onChange = {props.setEmail}
                    value = {props.data.contact_form.email.value} 
                    type={props.data.contact_form.email.type} 
                    placeholder = {props.data.contact_form.email.placeholder} />
                <textarea onChange = {props.setText}
                    value = {props.data.contact_form.textarea.value} 
                    placeholder = {props.data.contact_form.textarea.placeholder}>
                </textarea>
            </form>
        </div>
    )
}

export default Contact;