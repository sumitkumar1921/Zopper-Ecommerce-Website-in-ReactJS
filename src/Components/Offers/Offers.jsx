import React from 'react'
import './Offers.css'
import exculsive_image from '../Assets/exclusive_image.png'
function Offers() {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>offers For You</h1>
                <p>Only On Best Sellers Product</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exculsive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
