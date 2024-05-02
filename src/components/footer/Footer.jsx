import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Anand Shukla</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Project</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/anandshuklaa_" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://www.facebook.com/ansh12500" className="footer__social-link" target="_blank">
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/anandshukla1250" className="footer__social-link" target="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>
            </div>


            <span className="footer__copy">
                &#169; Anand Shukla. All rights reserved
            </span>


        </div>
    </footer>
    
  )
}

export default Footer;