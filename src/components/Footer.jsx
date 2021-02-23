import React from 'react';
import { Link } from 'react-router-dom';


const Footer = (props) =>{
    return(
        <div>
            {
                props.data.footer_copyright.map( 
                   (names,i)=> <Link key={i} to = {names.link}>{names.author}</Link>
                )
            }
        </div>
    )
}

export default Footer;