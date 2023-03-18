import React from 'react'
import './ScrollUp.css'

function ScrollUp() {
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY)
        const scrollUp = document.querySelectorAll('.scrollup')[0]
        // console.log(scrollUp)
        if (window.scrollY >= 560) {
            scrollUp.classList.add('show-scroll')
        } else {
            scrollUp.classList.remove('show-scroll')
        }
    })
    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp
