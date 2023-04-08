import React from "react";
function NavbarItems(props){
    return(
        <li className="nav-item">
            <a className="nav-link" href={props.href}>
                {props.label}
            </a>
        </li>
    )
}

export default NavbarItems;