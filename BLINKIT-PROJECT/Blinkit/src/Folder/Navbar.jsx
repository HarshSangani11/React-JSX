import React, { useState, useEffect } from "react";

export default function Navbar() {
    const placeholders = ['Search "curd"', 'Search "milk"', 'Search "bread"', 'Search "sugar"', 'Search "chips"', 'Search "paneer"'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [placeholders.length]);

    return (
        <div className="id">
            <div className="logo">
                <img
                    width="134"
                    height="50"
                    viewBox="0 0 114 30"
                    src="https://clevertap.com/wp-content/uploads/2023/08/blinkit-logo_casestudy.png"
                    alt="Logo"
                />
            </div>

            <div className="location">
                <div className="location-content">
                    <div className="location-text">Delivery in 8 minutes</div>
                    <div className="location-details">
                        7Q8G+5JJ, Girnar Society Main...
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </div>

            <div className="search">
                <div className="search-bar">
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="input-wrapper">
                        <input className="search-input" type="text" />
                        <div className="sliding-placeholder">
                            <span key={currentIndex} className="sliding-text">
                                {placeholders[currentIndex]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login">
                <a href="#">Login</a>
            </div>

            <div className="mycart">
                <button className="cart-button">
                    <i className="fa-solid fa-cart-shopping"></i> My Cart
                </button>
            </div>
        </div>
    );
}
