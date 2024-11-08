import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FaRupeeSign, FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

import './normal.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

import cy1 from '../images/cy1.png';
import cy2 from '../images/cy2.png';
import cy3 from '../images/cy3.png';
import cy4 from '../images/cy4.png';
import cy5 from '../images/cy5.png';
import rate1 from '../images/rate1.png';
import star from '../images/star.png';


export default function Kids()
{
    const [selectedSize, setSelectedSize] = useState("");
    const [showBagNotification, setShowBagNotification] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const sizes = ["One Size"];

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    useEffect(() => {
        if (showBagNotification) {
            const timer = setTimeout(() => {
                setShowBagNotification(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showBagNotification]);

    const handleAddToBag = () => {
        if (selectedSize) {
            const newItem = {
                id: Date.now(), 
                size: selectedSize,
                price: 5999, 
                image: cy1,
                brand: "Baybee", 
                description: "Kids 2 In 1 Tricycle",
                code: "25080890",
                seller: "BRAND TREND WIZARD (OPC) PRIVATE LIMITED"
            };

            const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const updatedCartItems = [...existingItems, newItem];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

            setCartItems(updatedCartItems);
            setShowBagNotification(true);
        } 
        else {
            alert("Please select a size.");
        }
    };

    return(
        <>

        <Navbar />

        <Container fluid className="purchase bg-white mt-3">
            <Row>
                <Col xs={12} md={3}>
                    <img src={cy1} alt="Kids Item 1" style={{ width: "100%" }} />
                </Col>
                <Col xs={12} md={3}>
                    <img src={cy2} alt="Kids Item 2" style={{ width: "100%" }} />
                </Col>
                <Col xs={12} md={6} className="p-2">
                    <h2 className="text-primary"><b>BAYBEE</b></h2>
                    <p>Kids 2 In 1 Tricycle</p>
                    <img src={rate1} style={{ width: "150px" }} alt="Rating" />
                    <hr />
                    <p>MRP <span style={{ color: "orangered" }}><FaRupeeSign />5999</span></p>
                    <h6 className="text-success">Inclusive of all taxes</h6>
                    <br />
                    <h5 style={{ color: "purple", fontStyle: "italic" }}>
                        SELECT SIZE <IoIosArrowForward style={{ marginBottom: "5px" }} />
                    </h5>
                    {sizes.map((size, index) => (
                        <Button
                            className="text-dark"
                            key={index}
                            style={{ borderRadius: "50px", marginRight: "10px" }}
                            onClick={() => handleSizeSelect(size)}
                            variant={selectedSize === size ? "info" : "outline-info"}
                        >
                            {size}
                        </Button>
                    ))}
                    <br /> <br />
                    <Button
                        style={{ width: "100%", maxWidth: "200px", padding: "13px", backgroundColor: "rgb(245, 43, 184)", border: "none" }}
                        onClick={handleAddToBag}
                    >
                        <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: "8px" }} /> ADD TO BAG
                    </Button>{' '}
                    <Button style={{ width: "100%", maxWidth: "200px", padding: "13px", color: "black", border: "1px solid black" }} variant="light">
                        <FaRegHeart style={{ marginRight: "8px", marginBottom: "4px" }} /> WISHLIST
                    </Button>{' '}
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs={12} md={3}>
                    <img src={cy3} style={{ width: "100%" }} />
                </Col>
                <Col xs={12} md={3}>
                    <img src={cy4} style={{ width: "100%" }} />
                </Col>
                <Col xs={12} md={6}>
                    <h4>Delivery Option <CiDeliveryTruck /></h4>
                    <br />
                    <input type="text" placeholder="Enter Your PinCode" style={{ width: "100%", maxWidth: "300px", padding: "10px" }} />
                    <h6 className="mt-1">Please enter PIN code to check delivery time & Pay on Delivery Availability</h6>
                    <br />
                    <p style={{ fontWeight: "normal" }}>100% Original Products</p>
                    <p style={{ fontWeight: "normal" }}>Pay on delivery might be available</p>
                    <p style={{ fontWeight: "normal" }}>Easy 7 days returns and exchanges</p>
                    <p style={{ fontWeight: "normal" }}>This item is only exchangeable for the same or a different size, if available, and cannot be returned</p>

                    <h4>BEST OFFERS <MdOutlineLocalOffer /></h4>
                    <h5>Best Price: <span style={{ color: "orangered" }}>Rs.2719</span></h5>
                    <ul>
                        <li><GoDotFill /> Coupon code: <b>MYNTRA400</b></li>
                        <li><GoDotFill /> Coupon Discount: Rs. 400 off (check cart for final savings)</li>
                        <li><GoDotFill /> Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                    </ul>
                </Col>
            </Row>


            <Row>
                <Col xs={12} md={6} className="mt-4">
                    <img src={cy5} style={{ width: "100%" }} />
                </Col>
                <Col xs={12} md={6}>
                    <h4>PRODUCT DETAILS <BiDetail style={{ marginBottom: "5px" }} /></h4>
                    <p style={{ fontWeight: "normal" }}>
                        Type: Tricycle
                    </p>
                    <p style={{ fontWeight: "normal" }}>
                        Colour: yellow & black
                    </p>
                    <p style={{ fontWeight: "normal" }}>
                        Operation Mode: battery Operation
                    </p>
                    <p style={{ fontWeight: "normal" }}>
                        Material: Plastic
                    </p>

                    <h5>Features</h5>
                    <p style={{ fontWeight: "normal" }}>
                        Introducing the Baybee 2 in 1 Furitto Baby Tricycle the perfect way to keep your little one entertained and safe! Built to last, this tricycle is designed to cater to your child's growing needs. Suitable for children between 2 and 5 years, this tricycle comes with an adjustable push handle, rubber wheels, and a safety belt for added safety and comfort. 
                        Adjustable Push Handle: The soft handlebar of this tricycle can be adjusted to three different heights of 28, 31 and 34 inches with the push of a button to provide the right fit for your growing child.
                        Rubber Wheels: The tricycle has three rubber wheels for a smooth and comfortable ride so your child can take off on their exciting adventures.
                        Recommended for kids aged 2-5 years.
                        Safety Belt: The tricycle comes with a comfortable and adjustable safety belt to keep your child secure as they explore the world around them.
                        Vibrant Design: The tricycle has a modern and eye-catching design with a bright yellow color to match your child's taste.
                        Durability: Constructed with top-quality materials, this tricycle is designed to last through your child's growth.
                    </p>

                    <h5>Size & Fit</h5>
                    <p style={{ fontWeight: "normal" }}>10 X 80.5 X 76.5CM</p>

                    <h5>Material & Care</h5>
                    <p style={{ fontWeight: "normal" }}>Metal</p>
                    <p style={{ fontWeight: "normal" }}>Wipe with clean, dry cloth to remove dust</p>
                    <br />

                    <h4>Specifications</h4>
                    
                    <Row>
                        <Col xs={12} md={6}>
                            <p style={{ fontWeight: "normal" }}>Operation Mode</p>
                            <h6>Manual Operation</h6>
                            <hr />
                            <p style={{ fontWeight: "normal" }}>Material</p>
                            <h6>Metal</h6>
                            <hr />
                            <p style={{ color: "red" }}>See More</p>
                        </Col>

                        <Col xs={12} md={6}>
                            <p style={{ fontWeight: "normal" }}>Type</p>
                            <h6>Cycle</h6>
                            <hr />
                            <p style={{ fontWeight: "normal" }}>MultiPack Set</p>
                            <h6>Single</h6>
                            <hr />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6}>
                </Col>
                <Col xs={12} md={6}>
                    <h4>Rating <FaRegStar /></h4>
                    <img src={star} style={{ width: "50%" }} alt="Rating" />
                    <hr />
                    <p style={{ color: "red" }}>View All 5495 Reviews</p>
                    <h5>
                        Product Code: 25080890
                    </h5>
                    <p style={{ fontWeight: "normal" }}>
                        Seller : <span style={{ color: "rgb(245, 43, 184)", fontWeight: "bold" }}>BRAND TREND WIZARD (OPC) PRIVATE LIMITED</span>
                    </p>
                    <p style={{ color: "red" }}>View Supplier Information</p>
                </Col>
            </Row>


            {showBagNotification && (
                <div className="notification" style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    zIndex: 1000
                }}>
                    <p>Item added to bag!</p>
                </div>
            )}
        </Container>   

        <Footer /> 
        </>
    );
};