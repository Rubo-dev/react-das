import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/header.scss';


const Header = (props) => {
    return(
        <header>
            <div className = 'layout header-block'>
                <div className = 'logo-block'>
                    <img src="https://technext.github.io/original/img/core-img/logo.png" alt=""/>
                </div>
                <div className = 'primary-menu'>
                    {
                        props.data.header_menus.map(
                            (menu,i) => <Link key={i} to = {menu.link}>{menu.title}</Link>
                            )
                    }     
                </div>
            </div>
        </header>
    );
}
export default Header;