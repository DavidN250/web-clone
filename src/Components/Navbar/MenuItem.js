import React from 'react'
import './Navbar.css'
function MenuItem(props) {
    return (
        <li className="menu-item">
            <a href="/">{props.menuName}</a>
        </li>
    )
}

export default MenuItem
