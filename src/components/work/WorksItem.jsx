import React from 'react'
import './Work.css'


function WorksItem(props) {
    return (
        <div className="work__card" key={props.id}>
            <img src={props.image} alt="" className='work__img' />
            <h3 className="work__title">{props.title}</h3>
            <a href="#" className="work__button ">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorksItem
