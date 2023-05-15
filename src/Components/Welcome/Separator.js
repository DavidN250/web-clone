import React from 'react'
import './WelcomeSection.css'

import translate from '../../img/translate.png'
import headphone from '../../img/headphone.png'
import target from '../../img/target.png'
import secure from '../../img/secure.png'

function Separator() {
    return (
        <div className='separator'>
            <div className="sep-item">
                <img src={headphone} alt="" />
                <span>24/7 Online Support</span>
            </div>
            <div className="sep-item">
                <img src={translate} alt="" />
                <span>Multilingual</span>
            </div>
            <div className="sep-item">
                <img src={secure} alt="" />
                <span>Secure</span>
            </div>
            <div className="sep-item">
                <img src={target} alt="" />
                <span>Self Reliant</span>
            </div>
        </div>
    )
}

export default Separator
