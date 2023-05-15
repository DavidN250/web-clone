import React from 'react'
import './WelcomeSection.css'
import { welcomeNotes } from '../../Data/welcomeNotes'
import Button from '../Common/Button'

function WelcomeSection() {
    return (
        <div className="welcome-section">
            <div className="left-w">
                <img src={welcomeNotes[0].bgImage} alt="" />
                <span>{welcomeNotes[0].title}</span>
                <h3>{welcomeNotes[0].subtitle}</h3>
                <p>{welcomeNotes[0].description}</p>
                <div className='buttons'>
                    <Button text={welcomeNotes[0].buttonText} className='w-button'/>
                    <Button text='Services' className='w-button-outlined'/>
                </div>
                
            </div>
            <div className="right-w">
                {/* <img className='back-image' src={welcomeNotes[0].bgImage2} alt="" /> */}
                <img className='fore-image' src={welcomeNotes[0].image} alt="" />
            </div>
        </div>
    )
}

export default WelcomeSection
