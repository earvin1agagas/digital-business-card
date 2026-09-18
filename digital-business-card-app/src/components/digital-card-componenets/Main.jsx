import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



export default function Main() {
    return (
        <main> 
            <div className="heading">
                <h1 className="name">Earvin Agagas</h1>
                <h3 className="role">Fullstack Developer</h3>
            </div>
            <div className="buttons">
                <a href="mailto:earvin1agagas@yahoo.com" className="email-button"><FontAwesomeIcon icon={faEnvelope} className="email-icon" />Email</a>
                <a href="https://www.linkedin.com/in/earvinagagas/" className="linkedin-button"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />LinkedIn</a>
            </div>
            <div className="content">
                <h1>About</h1>
                    <p>
                        I am a graduate from San Francisco State University in Computer Engineering 
                        and a fullstack developer. From my previous experience, I am more frontend leaning.
                        I am always looking for new things to learn and improve to become a successful developer.
                    </p>
                <h1>Interests</h1>
                    <p>
                        Coffee, exercising, and learning!
                    </p>
            </div>
        </main>
    )
}