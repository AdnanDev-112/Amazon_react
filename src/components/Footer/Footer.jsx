import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer id="footer">
            <div className="top-pointer">
                <h4 onClick={scrollToTop}>Back to top</h4>
            </div>
            <div className="footer-content">
                <div className="individual-container">
                    <div className="col-heading">
                        Get to Know Us
                    </div>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a Smile</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div className="individual-container">
                    <div className="col-heading">
                        Connect with Us
                    </div>
                    <ul>
                        <li><a target='_blank' href='https://www.facebook.com/Amazon/' >Facebook </a></li>
                        <li><a target='_blank' href='https://twitter.com/amazon' >Twitter </a></li>
                        <li><a target='_blank' href='https://www.instagram.com/amazon' >Instagram </a></li>
                    </ul>
                </div>
                <div className="individual-container">
                    <div className="col-heading">
                        Make Money with Us
                    </div>
                    <ul>
                        <li> Sell on Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li>Amazon Global Selling</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants</li>

                    </ul>
                </div>
                <div className="individual-container">
                    <div className="col-heading">
                        Let Us Help You
                    </div>
                    <ul>
                        <li> COVID-19 and Amazon</li>
                        <li>Your Account </li>
                        <li>Returns Centre </li>
                        <li> 100% Purchase Protection</li>
                        <li>Amazon App Download </li>
                        <li> Amazon Assistant Download</li>
                        <li>Help </li>
                    </ul>
                </div>

            </div>
            <div className="footer-logo">
                <div className="container-img"></div>
            </div>

        </footer>
    )
}

export default Footer