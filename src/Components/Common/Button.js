import React from 'react'
import './common.css'
function Button(props) {
    return (
        <button className={props.className}>{props.text}</button>
    )
}

export default Button
