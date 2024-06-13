import React from 'react'

function Data() {
    return (
        <div className="home__data">
            <h1 className="home__title" title='Name'>Shaik Sohail</h1>
            <h3 className="home__subtitle" title='Role'>Web Developer &#9749; </h3>
            <p className="home__description" title='description'>I'm creative web developer based in hyderabad, and I'm very passionate and dedicatd to my work.</p>
            <a href="#contact" className="button button-flex">Contact
                <i class="uil uil-envelope-upload"></i>
            </a>
            <a href="#about" className="button-outline button-flex">About
                <i class="uil uil-user"></i>
            </a>
        </div>
    )
}

export default Data
