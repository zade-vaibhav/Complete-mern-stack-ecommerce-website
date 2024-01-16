import React from 'react'
import "./hero.css"
import hand from '../Assets/hand_icon.png'
import arrow from "../Assets/arrow.png"
import heroImg from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div>
                    <h2>NEW ARRIVAL'S ONLY</h2>
                    <div className='hand-icon'>
                        <p>New</p>
                        <img src={hand} />
                    </div>
                    <p>Collection</p>
                    <p>For EveryOne</p>
                    <div className='hero-latest'>
                        Latest Collection
                        <img src={arrow} />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={heroImg} />
            </div>
        </div>
    )
}

export default Hero
