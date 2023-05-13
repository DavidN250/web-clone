import React, { useEffect, useRef, useState } from 'react'
import './DropdownMenu.css'
import potrait from '../img/potrait.jpg'
import user from '../img/user.png'
import edit from '../img/edit.png'
import settings from '../img/settings.png'
import inbox from '../img/envelope.png'
import help from '../img/question.png'
import logout from '../img/log-out.png'


function DropdowMenu() {
    const [open, setOpen] = useState(false)
    let menuref = useRef()

    useEffect(()=>{
        let handler = (e)=>{
            if(!menuref.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener('mousedown',handler)

        return()=>{
            document.removeEventListener('mousedown',handler)
        }
    })
    return (
        <div className="dropdown-container" ref={menuref}>
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                <img src={potrait} alt=""/>
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <h3>John Doe <br /><span>Web Designer</span></h3>
                <ul className='dropdown'>
                    <DropdownItem img={user} link={'My Profile'}/>
                    <DropdownItem img={edit} link={'Edit'}/>
                    <DropdownItem img={inbox} link={'Inbox'}/>
                    <DropdownItem img={settings} link={'Settings'}/>
                    <DropdownItem img={help} link={'Help'}/>
                    <DropdownItem img={logout} link={'Log Out'}/>
                </ul>
            </div>
        </div>
    )
}


function DropdownItem(props) {
    return (
        <li className='dropdown-item'>
            <img src={props.img} alt=''></img>
            <a href='/'>{props.link}</a>
        </li>
    )
}

export default DropdowMenu
