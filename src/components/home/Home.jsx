import React from 'react'
import './Home.css'

import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'
function Home() {
    return (
        <div className='home section' id='home'>
            <div className="home__container grid container">
                <div className="home__content grid">
                    <Social />
                    <div className="home_img"></div>
                    <Data />
                </div>
                <Scroll />
            </div>
        </div>
    )
}

export default Home
