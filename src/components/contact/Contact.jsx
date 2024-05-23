import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_n5kvmht',//service id
            'template_o3c3xa9',//template id
            form.current,
            'FdsWPpDPwjTBbhALp'// public key 
        )
        e.target.reset()
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">
                        Talk to me
                    </h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">sohailshaiksk12345@gmail.com</span>
                            <a href="mailto:sohailshaiksk12345@gmail.com" target='_blank' className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon "></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+91 7396523730</span>
                            <a href="https://wa.me/917396523730?text=hello!" target='_blank' className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon "></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">Shazim Here</span>
                            <a href="https://www.facebook.com/profile.php?id=100010409743181" target='_blank' className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon "></i></a>
                        </div>

                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title"> write me your project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name='name'
                                className='contact__form-input'
                                placeholder='Insert your name'
                            />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name='email'
                                className='contact__form-input'
                                placeholder='Insert your email'
                            />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">
                                Project
                            </label>
                            <textarea
                                required
                                name="project"
                                cols="30"
                                rows="10"
                                className='contact__form-input'
                                placeholder='Write your project'
                            >

                            </textarea>
                        </div>
                        <button href="" className="button button-flex">Send Messege
                            <i class="uil uil-location-arrow contact__button-icon"></i>
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact
