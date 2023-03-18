import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <section className="footer__container  container">
                <h1 className="footer__title">Shaik Sohail</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonial</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/profile.php?id=100010409743181" className="footer__social-icon" target='_blank'>
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/lost_shazim/" className="footer__social-icon" target='_blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="mailto:sohailshaiksk12345@gmail.com" className="footer__social-icon" target='_blank'>
                        <i className="uil uil-envelope"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Shaik Sohail. All right reserved</span>
            </section>
        </footer>
    )
}

export default Footer
