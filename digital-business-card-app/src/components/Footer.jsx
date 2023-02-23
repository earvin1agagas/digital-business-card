import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="footer-icons">
            <div className="footer-buttons">
                <a className="footer-project" href="https://sites.google.com/view/vrbaristasimulator/about-us?authuser=0"><FontAwesomeIcon icon={ faMugHot } className="email-icon" /></a>
                <a className="footer-github" href="https://www.linkedin.com/in/earvinagagas/" ><FontAwesomeIcon icon= { faGithub } className="email-icon" /></a>
            </div>
        </footer>
    )
}