import React, { useEffect, useState } from 'react'
import './Header.css'
import logo_light from './../../assets/sign-logo.png'
import logo_dark from './../../assets/logo-dark.png'

function Header() {
  
  const [toggle, setToggle] = React.useState(true)
  function toggleHandle() {
    setToggle(prevToggle => !prevToggle)
  }
  const [active, setActive] = React.useState('#home')

  let logo;
    if (window.innerWidth > 768) {
      logo = logo_light
    } else {
      logo = logo_dark
    }

  // ************ background showdow of header *********** 
  window.addEventListener('scroll', () => {
    const header = document.querySelectorAll('.header')[0]
    // console.log(header)

    if (window.scrollY >= 80) {
      header.classList.add('show-header-shadow')
    } else {
      header.classList.remove('show-header-shadow')
    }
  })

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          <img src={logo} alt="signature" />
        </a>
        <div className={toggle ? 'nav__menu' : 'nav__menu show-menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' onClick={() => setActive('#home')} className={active === '#home' ? 'nav__link active-link' : 'nav__link'}>
                <i class="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'nav__link active-link' : 'nav__link'}>
                <i class="uil uil-user nav__icon"></i>About</a>
            </li>
            <li className='nav__item'>
              <a href='#skill' onClick={() => setActive('#skills')} className={active === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                <i class="uil uil-file-alt nav__icon"></i>Skills</a>
            </li>
            <li className='nav__item'>
              <a href='#service' onClick={() => setActive('#service')} className={active === '#service' ? 'nav__link active-link' : 'nav__link'}>
                <i class="uil uil-briefcase-alt nav__icon"></i>Service</a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'nav__link active-link' : 'nav__link'}>
                <i class="uil uil-scenery  nav__icon"></i>Portfolio</a>
            </li>
            <li className='nav__item'>
              <a href='#contact' onClick={() => setActive('#contact')} className={active === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                <i class="uil uil-navigator  nav__icon"></i>Contact</a>
            </li>
          </ul>
          {!toggle ? <i class="uil uil-times nav__close" onClick={toggleHandle}></i> : ''}
        </div>
        <div className='nav__toggle'>
          {toggle ? <i class="uil uil-apps " onClick={toggleHandle}></i> : ''}
        </div>
      </nav>
    </header>
  )
}

export default Header
