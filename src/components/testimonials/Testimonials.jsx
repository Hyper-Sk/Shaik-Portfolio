import React from 'react'
import './Testimonials.css'
import Data from './TestimonialData'

import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper'

function Testimonials() {
    return (
        <section className="testimonial container section" id='testimonials'>
            <h2 className="section__title">My Clients say</h2>
            <span className="section__subtitle">Testimonial</span>
            <Swiper
                className="testimonial__container"

                grabCursor={true}
                loop={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    578: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,

                    },

                }} modules={[Pagination]}
            >
                {Data.map(item => {
                    return (
                        <SwiperSlide className="testimonial__card" key={item.id}>
                            <img src={item.img} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{item.title}</h3>
                            <p className="testimonial__description">{item.description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section >
    )
}

export default Testimonials
