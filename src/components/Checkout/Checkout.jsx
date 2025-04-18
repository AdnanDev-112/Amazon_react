import React, { useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();



    return (
        <>
            <Header />
            <div className={basket.length == 0 ? "checkout extendheight" : "checkout"}>
                <div className="checkout__left">
                    <img
                        className="checkout__ad"
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt=""
                    />

                    <div>
                        <h3>Hello,{!user ? 'Guest' : user?.email} </h3>
                        <h2 className="checkout__title">Your shopping Basket</h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>

            <Footer />
            <ToastContainer />
        </>
    );
}

export default Checkout;