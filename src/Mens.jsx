import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

import './normal.css';
import Navbar from "./Navbar";
import Footer from "./Footer";


import ts1 from '../images/ts1.png';
import ts2 from '../images/ts2.png';
import ts3 from '../images/ts3.png';
import ts4 from '../images/ts4.png';
import rate1 from '../images/rate1.png';
import more1 from '../images/more1.png';
import star from '../images/star.png';


export default function Mens()
{
    const [selectedSize, setSelectedSize] = useState("");
    const [showBagNotification, setShowBagNotification] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const [sizes] = useState(["S", "M", "L", "XL"]);

    useEffect(() => {
        if (showBagNotification) {
            const timer = setTimeout(() => {
                setShowBagNotification(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showBagNotification]);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToBag = () => {
        if (selectedSize) {
            const newItem = {
                id: Date.now(), 
                size: selectedSize,
                price: 899, 
                image: ts1, 
                brand: "Moda Rapido", 
                description: "Men Black & White Printed Round Neck T-shirt",
                code: "2378356",
                seller: "Truenet Commerce",
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
                <Col xs={12} md={4} lg={3} className="mb-3">
                    <img src={ts1} className="img-fluid" alt="T-shirt 1" />
                </Col>
                <Col xs={12} md={4} lg={3} className="mb-3">
                    <img src={ts2} className="img-fluid" alt="T-shirt 2" />
                </Col>
                <Col xs={12} md={12} lg={6} className="p-2">
                    <h2 className="text-primary"><b>Moda Rapido</b></h2>
                    <p>Men Black & White Printed Round Neck T-shirt</p>
                    <img src={rate1} className="img-fluid" style={{ width: "150px" }} alt="Rating" />
                    <hr />
                    <p>MRP <span><FaRupeeSign />899</span></p>
                    <h6 className="text-success">inclusive of all taxes</h6>
                    <br />
                    <p>MORE COLOR</p>
                    <img src={more1} className="img-fluid" style={{ width: "100px" }} alt="More Colors" />
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12} md={4} lg={3} className="mb-3">
                    <img src={ts3} className="img-fluid" alt="T-shirt 3" />
                </Col>
                <Col xs={12} md={4} lg={3} className="mb-3">
                    <img src={ts4} className="img-fluid" alt="T-shirt 4" />
                </Col>
                <Col xs={12} md={12} lg={6}>
                    <h5 style={{ color: "purple", fontStyle: "italic" }}>
                        SELECT SIZE <IoIosArrowForward style={{ marginBottom: "5px" }} />
                    </h5>
                    {sizes.map((size, index) => (
                        <Button
                            className="text-dark"
                            key={index}
                            style={{ borderRadius: "55%", marginRight: "10px" }}
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
                    </Button>
                    <br /> <br />
                    <hr />
                    <h3>Delivery Option <CiDeliveryTruck /></h3>
                    <input type="text" placeholder="Enter Your PinCode" style={{ width: "100%", maxWidth: "300px", padding: "10px", border: "2px solid grey" }} />
                    <h6 className="mt-1">Please enter PIN code to check delivery time & Pay on Delivery Availability</h6>
                    <br />
                    <p style={{ fontWeight: "normal" }}>100% Original Products</p>
                    <p style={{ fontWeight: "normal" }}>Pay on delivery might be available</p>
                    <p style={{ fontWeight: "normal" }}>Easy 14 days returns and exchanges</p>
                    <br />
                    <h4>BEST OFFERS <MdOutlineLocalOffer /></h4>
                    <h5>Best Price: <span style={{ color: "orangered" }}>Rs.1329</span></h5>
                    <ul>
                        <li> <GoDotFill /> Coupon code: <b> MYNTRA400 </b> </li>
                        <li> <GoDotFill /> Coupon Discount: Rs. 400 off (check cart for final savings) </li>
                        <li> <GoDotFill /> Applicable on: Orders above Rs. 1099 (only on first purchase) </li>
                    </ul>

                    <h4>PRODUCT DETAILS <BiDetail style={{ marginBottom: "5px" }} /> </h4>
                    <p style={{ fontWeight: "normal" }}>Black and white printed T-shirt, has a round neck, long sleeves</p>
                    <h5>Size & Fit</h5>
                    <p style={{ fontWeight: "normal" }}>The model (height 6') is wearing a size M</p>
                    <h5>Material & Care</h5>
                    <p style={{ fontWeight: "normal" }}>Cotton</p>
                    <p style={{ fontWeight: "normal" }}>Machine-wash</p>
                    <br />
                    <h4>Specifications</h4>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} className="mb-3">
                </Col>
                <Col xs={12} md={6} className="p-4">
                    <p style={{ fontWeight: "normal" }}>Fabric</p>
                    <h6>Cotton</h6>
                    <hr />
                    <p style={{ fontWeight: "normal" }}>Length</p>
                    <h6>Regular</h6>
                    <hr />
                    <p style={{ fontWeight: "normal" }}>Multi Pack Set</p>
                    <h6>Single</h6>
                    <hr />
                    <p style={{ fontWeight: "normal" }}>Occasion</p>
                    <h6>Casual</h6>
                    <hr />
          
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} className="mb-3">
                </Col>
                <Col xs={12} md={6} className="p-4">
                    <p style={{ fontWeight: "normal" }}>Fit</p>
                    <h6>Regular Fit</h6>
                    <hr />
                    <p style={{ fontWeight: "normal" }}>Main Trend</p>
                    <h6>Abstract</h6>
                    <hr />
                    <p style={{ fontWeight: "normal" }}>Neck</p>
                    <h6>Round Neck</h6>
                    <hr />
                    <p style={{ fontWeight: "normal" }}>Pattern</p>
                    <h6>Printed</h6>
                    <hr />
                    <p style={{ color: "red" }}>See More</p>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} className="mb-3">
                </Col>
                <Col xs={12} md={6}>
                    <h4>Rating <FaRegStar /> </h4>
                    <img src={star} className="img-fluid" style={{ width: "50%" }} alt="Rating" />
                    <hr />
                    <p style={{ color: "red" }}>View All 5495 Reviews</p>
                    <h5>Product Code: 2378356</h5>
                    <p style={{ fontWeight: "normal" }}>
                        Seller: <span style={{ color: "rgb(245, 43, 184)", fontWeight: "bold" }}>Truenet Commerce</span>
                    </p>
                    <p>View Supplier Information</p>
                </Col>
            </Row>
        </Container>

        <Footer />    
        </>
    );
};