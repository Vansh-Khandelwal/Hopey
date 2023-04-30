import React, { useState } from 'react'

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import './Slider.scss';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = ["https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/346/posts/31518/image/teemock2.jpg",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU",]

    const prevSlide = () => {
        setCurrentSlide(currentSlide===0?data.length-1:currentSlide-1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide===data.length-1?0:currentSlide+1);
    }

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosNewOutlinedIcon/>
                </div>
                <div className="icon">
                    <ArrowForwardIosOutlinedIcon onClick={nextSlide}/>
                </div>
            </div>
        </div>
    )
}

export default Slider