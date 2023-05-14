import React from 'react'
import './Navbar.css'
import logo from '../../img/Logo-SVG-01.svg'
import search from '../../img/search.png'
import MenuItem from './MenuItem'
import Button from '../Common/Button'

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="brand">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="menu">
                <ul className="menu-items">
                    <MenuItem menuName='Home'/>
                    <MenuItem menuName='Hosting'/>
                    <MenuItem menuName='IT Integration and Consulting'/>
                    <MenuItem menuName='Community'/>
                    <MenuItem menuName='Contact'/>
                    <img src={search} alt="" />
                    <Button text='Market Place' className='nav-button'/>

                </ul>
            </div>
        </div>
    )
}

export default Navbar
