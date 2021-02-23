import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <div className={"header"}>
           {
               props.data.header_menus.map(
                   (menu,i) => <Link key={i} to = {menu.link}>{menu.title}</Link>
                )
           }     
        </div>
    );
}
export default Header;