import React from 'react'
import './Header.css'

function Header() {
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
  const [toggle, setToggle] = React.useState(false)
  function toggleHandle() {
    setToggle(prevToggle => !prevToggle)
  }
  const [active, setActive] = React.useState('#home')
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>Shaik Sohail</a>
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
