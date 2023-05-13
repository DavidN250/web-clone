import React from 'react'
import './MenuBar.css'
import DropdownMenu from '../DropdowMenu'
import logo from '../../img/Logo-SVG-01.svg'

function MenuBar() {
    return (
        <div className="menu-bar">
            <div className="brand">
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='menu'>
                <ul>
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About Us</li>
                    <li className="menu-item">Contact</li>
                    <li className="menu-item">Blog</li>
                </ul>
            </div>

            <div className="profile">
                <DropdownMenu/>
            </div>
        </div>
    )
}

export default MenuBar
