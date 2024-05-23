import React, { useState } from 'react'
import './Qualification.css'

function Qualification() {
    const [toggle, setToggle] = useState(1)

    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                {/* -------------- Qualification tabs---------  */}
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggle === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                    </div>
                    <div onClick={() => toggleTab(2)} className={toggle === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                    </div>
                </div>

                <div className="qualification__section">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">


                            <div>
                                <h3 className="qualification__title">10th Standard</h3>
                                <span className="qualification__subtitle">Secondary School Certificate (SSC)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">Civis, Economics, Commerce (CEC)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Bachlor's</h3>
                                <span className="qualification__subtitle">Bachlor's in Commerce (Computer's Application)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>

                        </div>

                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Crammaze Inc </h3>
                                <span className="qualification__subtitle">Hyderabad</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May 2023 - Present
                                </div>
                            </div>
                        </div>

                        {/* <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Looking for Job</h3>
                                <span className="qualification__subtitle">Hyderabad</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Present
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
