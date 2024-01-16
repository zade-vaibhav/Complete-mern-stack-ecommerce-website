import React from 'react'
import "./offer.css"
import exclusice_image from "../Assets/exclusive_image.png"

const Offers = () => {
    return (
        <div className='offer'>
            <div className="offer_left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offer_right">
                <img src={exclusice_image} />
            </div>
        </div>
    )
}

export default Offers
