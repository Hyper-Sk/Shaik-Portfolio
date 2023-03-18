import React from 'react'
import './About.css'
import Info from './Info'
import aboutImg from './../../assets/about.jpg'
import CV from './../../assets/Shaik_Sohail_cv.pdf'

function About() {
    return (
        <section className="about section" id='about'>
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={aboutImg} alt="about img" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description" > Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player.
                    </p>
                    <a download='' href={CV} className="button button-flex">
                        Download CV
                        <i class="uil uil-download-alt about__button-icon"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
