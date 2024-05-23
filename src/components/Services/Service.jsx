import React, { useState } from 'react'
import './Service.css'

function Service() {
    const [toggle, setToggle] = useState(0)

    const toggleHandle = (index) => setToggle(index)


    return (
        <section className="services section" id="service">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className='services__content'>
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Front-End <br /> Development</h3>
                    </div>
                    <span className="services__button" >View More<i className="uil uil-arrow-right services__button-icon" onClick={() => toggleHandle(1)} ></i></span>
                    <div className={toggle === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">

                            <i className="uil uil-times services__modal-close" onClick={() => toggleHandle(0)}></i>

                            <h3 className="services__modal-title">Front-End Development</h3>
                            <p className="services__modal-description">Service with more than 1+ years of experience. Providing quality work to clients and companies.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Back-End <br /> Development</h3>
                    </div>
                    <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon" onClick={() => toggleHandle(3)}></i></span>

                    <div className={toggle === 3 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleHandle(0)}></i>
                            <h3 className="services__modal-title">Back-End Developer</h3>
                            <p className="services__modal-description">Service with more than 1 year of experience. Providing quality work to clients and companies.</p>
                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Database Management
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        CRUD Operations
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        API's Interactions
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                       Back-End Operations
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Ui/Ux <br /> Development</h3>
                    </div>

                    <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon" onClick={() => toggleHandle(2)}></i></span>

                    <div className={toggle === 2 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleHandle(0)}></i>
                            <h3 className="services__modal-title">Ui/Ux Development</h3>
                            <p className="services__modal-description">Service with more than 1+ year of experience. Providing quality work to clients and companies.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>
                            
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

             
            </div>
        </section>
    )
}

export default Service
