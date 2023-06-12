import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">nandhu</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#skill" className="footer__link">
              skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/nandhu_sharp/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://github.com/n9nadhu0k"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nandha-kumar-banuraj/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>
        <span className='footer__copy'> &#169; nandhu all rights reserved</span>
      </div>
    </section>
  );
}

export default Footer