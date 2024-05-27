import React from 'react'
import './About.css'
import Info from './Info'
import aboutImg from './../../assets/info.jpeg'
import CV from './../../assets/SHAIK_RESUME.pdf'

function About() {
    return (
        <section className="about section" id='about'>
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={aboutImg} alt="about img" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description" > Front End developer with a passion for agile project management and problem-solving. Proficient in software testing methodologies and skilled in effective communication with cross-functional teams. Adept at team management and fostering collaboration in fast-paced environments. Demonstrated adaptability in tackling diverse challenges while maintaining a focus on user experience and responsive design principles. Possesses strong JavaScript skills and expertise in web design, including React state management and API handling. Known for exceptional time management abilities, ensuring timely delivery of high-quality projects.
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
