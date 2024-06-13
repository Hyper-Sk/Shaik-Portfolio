import React from 'react'
import './Skills.css'
import html from './../../assets/tech-icons/html.png'
import css from './../../assets/tech-icons/css.png'
import js from './../../assets/tech-icons/js.png'
import rect from './../../assets/tech-icons/react.png'
import ts from './../../assets/tech-icons/typescript.png'
import bootstrap from './../../assets/tech-icons/bootstrap.png'
import MUI from './../../assets/tech-icons/materialui.png'
import tailwind from './../../assets/tech-icons/tailwind.png'
import jquery from './../../assets/tech-icons/jquery.png'
import python from './../../assets/tech-icons/python.png'
import php from './../../assets/tech-icons/php.png'
import sql from './../../assets/tech-icons/mysql.png'
import github from './../../assets/tech-icons/github.png'
import node from './../../assets/tech-icons/node.png'
import figma from './../../assets/tech-icons/figma.png'


function Skills() {
    return (
        <section className="skills section" id="skill" >
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical level</span>
            <div className="skills__container container">
                <div className="skills__content">
                    <div className="skill__single">
                        <img src={html} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={css} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={js} className='skill-rounded' alt="tech-icon" />
                    </div>
                    
                    <div className="skill__single">
                        <img src={rect} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={ts} className='skill-rounded' alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={jquery} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={bootstrap} alt="tech-icon" />
                    </div>
                    
                    <div className="skill__single">
                        <img src={MUI} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={tailwind} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={python} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={php} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={node} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={sql} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={github} alt="tech-icon" />
                    </div>
                    <div className="skill__single">
                        <img src={figma} alt="tech-icon" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Skills
