import React from 'react'
import './Home.css'
import Product from '../Product/Product'
import Footer from '../Footer/Footer'
import { ToastContainer, toast } from 'react-toastify'
export const showLoginNoti = () => {
    toast.success('Logged in', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export const showLogoutNoti = () => {
    toast.error('Logged Out', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
const Home = () => {

    return (
        <>
            <div className="home">
                <div className="home__container">
                    <img
                        className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt=""
                    />
                    <div className="home__row">
                        <Product id="26365008"
                            title="OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage)"
                            price={250}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71KCwNV6MuL._SX569_.jpg"
                        />
                        <Product
                            id="7526621"
                            title="BALLOREX KS-21VD Brushless Cordless Drill Machine/Driver with 2 batteries"
                            price={75}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/71hVPrOZz8L._SY355_.jpg"
                        />

                    </div>
                    <div className="home__row">
                        <Product
                            id="19989539"
                            title="boAt Wave Lite Smartwatch with 1.69 Inches HD Display, Heart Rate & SpO2 Level Monitor"
                            price={59.99}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/61yMzD6RG8L._SY355_.jpg"
                        />
                        <Product
                            id="13620364"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                            id="12232706"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="11496764"
                            title="Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard: Green Mechanical Switches"
                            price={350.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81RyDhL6FjL._SX522_.jpg"
                        />
                        <Product
                            id="26596760"
                            title="2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display"
                            price={598.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg"
                        />
                        <Product
                            id="31039017"
                            title="Apple iPhone 13 (128GB) - Midnight"
                            price={999.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX522_.jpg"
                        />
                    </div>





                </div>

            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}


export default Home