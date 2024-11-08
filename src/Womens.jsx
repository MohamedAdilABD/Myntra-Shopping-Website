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

import './normal.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

import jewel1 from '../images/jewel1.png';
import jewel2 from '../images/jewel2.png';
import jewel3 from '../images/jewel3.png';
import jewel4 from '../images/jewel4.png';
import jewel5 from '../images/jewel5.png';
import star1 from '../images/star1.png';
import rate2 from '../images/rate2.png';


export default function Womens()
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
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [showBagNotification]);

    const handleAddToBag = () => {
        if (selectedSize) {
            const newItem = {
                id: Date.now(), 
                size: selectedSize,
                price: 2599, 
                image: jewel2, 
                brand: "Elegant Sparkle Necklace", 
                description: "Women's 18K Gold Plated Pendant Necklace",
                code: "2378361",
                seller: "Truenet Commerce"
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
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3 mb-md-0">
                    <img src={jewel1} alt="Women's Jewel 1" style={{ width: "100%", height: "auto" }} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3 mb-md-0">
                    <img src={jewel2} alt="Women's Jewel 2" style={{ width: "100%", height: "auto" }} />
                </Col>
                <Col xs={12} md={8} lg={6} className="p-3">
                    <h2 className="text-primary"><b>Elegant Sparkle Necklace</b></h2>
                    <p>Women's 18K Gold Plated Pendant Necklace</p>
                    <img src={star1} style={{ width: "100px", height: "auto" }} alt="Rating" />
                    <hr />
                    <p>MRP <span><FaRupeeSign />2599</span></p>
                    <h6 className="text-success">Inclusive of all taxes</h6>
                    <br />
                    <h5 style={{ color: "purple", fontStyle: "italic" }}>
                        SELECT SIZE <IoIosArrowForward style={{ marginBottom: "5px" }} />
                    </h5>
                    {sizes.map((size, index) => (
                        <Button
                            className="text-dark"
                            key={index}
                            style={{ borderRadius: "50px", marginRight: "10px", marginBottom: "5px" }}
                            onClick={() => handleSizeSelect(size)}
                            variant={selectedSize === size ? "info" : "outline-info"}
                        >
                            {size}
                        </Button>
                    ))}
                    <br /> <br />
                    <Button
                        style={{ width: "100%", maxWidth: "200px", padding: "13px", backgroundColor: "rgb(245, 43, 184)", border: "none", marginBottom: "10px" }}
                        onClick={handleAddToBag}
                    >
                        <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: "8px" }} /> ADD TO BAG
                    </Button>
                    <Button
                        style={{ width: "100%", maxWidth: "200px", padding: "13px", color: "black", border: "1px solid black" }}
                        variant="light"
                    >
                        <FaRegHeart style={{ marginRight: "8px", marginBottom: "4px" }} /> WISHLIST
                    </Button>
                </Col>
            </Row>



            <Row className="mt-4">
                <Col xs={12} sm={6} md={3}>
                    <img src={jewel3} alt="Women's Jewel 3" style={{ width: "100%" }} />
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <img src={jewel4} alt="Women's Jewel 4" style={{ width: "100%" }} />
                </Col>
                <Col xs={12} md={6}>
                    <hr />
                    <h3>Delivery Option <CiDeliveryTruck /></h3>
                    <input type="pincode" placeholder="Enter Your PinCode" style={{ width: "100%", maxWidth: "300px", padding: "10px", border: "2px solid grey" }} />
                    <h6 className="mt-1">Please enter PIN code to check delivery time & Pay on Delivery Availability</h6>
                    <br />
                    <p style={{ fontWeight: "normal" }}>100% Original Products</p>
                    <p style={{ fontWeight: "normal" }}>Pay on delivery might be available</p>
                    <p style={{ fontWeight: "normal" }}>Easy 14 days returns and exchanges</p>
                    <br />
                    <h4>BEST OFFERS <MdOutlineLocalOffer /></h4>
                    <h5>Best Price: <span style={{ color: "orangered" }}>Rs.2399</span></h5>
                    <ul>
                        <li><GoDotFill /> Coupon code: <b> JEWEL200 </b></li>
                        <li><GoDotFill /> Coupon Discount: Rs. 200 off (check cart for final savings)</li>
                        <li><GoDotFill /> Applicable on: Orders above Rs. 1999 (only on first purchase)</li>
                    </ul>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12} sm={6} md={3} lg={3} >
                    <img src={jewel5} alt="Women's Jewel 5" style={{ width: "100%" }} />
                </Col>

                <Col xs={12} sm={6} md={3} lg={3} ></Col>

                <Col xs={12} sm={6} md={6} lg={6}>
                    <h4>PRODUCT DETAILS <BiDetail style={{ marginBottom:"5px"}} /></h4>
                    <p style={{fontWeight:"normal"}}> 
                        This jewellery set consists of a necklace and a pair of earrings. The necklace has Kundan details, is secured with a lobster closure, and includes a pair of matching drop earrings, each secured with a post-and-back closure.
                    </p>

                    <h5>Size & Fit</h5>
                    <p style={{fontWeight:"normal"}}>Necklace size: One Size</p>
        
                    <h5>Material & Care</h5>
                    <p style={{fontWeight:"normal"}}>Material: Alloy</p>
                    <p style={{fontWeight:"normal"}}>Stone Type: Kundan</p>

                    <h5>Care Instruction</h5>
                    <p style={{fontWeight:"normal"}}>
                        Wipe your jewellery with a soft cloth after every use. Always store your jewellery in a flat box to avoid accidental scratches. Keep sprays and perfumes away from your jewellery. Do not soak your jewellery in water. Clean your jewellery using a soft brush, dipped in jewellery cleaning solution only.
                    </p>       
                    <br />
                    <h4>Specifications</h4>
        
                   <Row>
                        <Col xs={12} sm={6}>
                            <p style={{fontWeight:"normal"}}>Occasion</p>
                            <h6>Ethnic</h6>
                            <hr />
                            <p style={{fontWeight:"normal"}}>Stone Type</p>
                            <h6>Kundan</h6>
                            <hr />
                            <p style={{fontWeight:"normal"}}>Add-Ons</p>
                            <h6>Maang Tika</h6>
                            <hr />
                            <p style={{color:"red"}}>See More</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p style={{fontWeight:"normal"}}>Base Metal</p>
                            <h6>Alloy</h6>
                            <hr />
                            <p style={{fontWeight:"normal"}}>Type</p>
                            <h6>Necklace and Earrings</h6>
                            <hr />
                            <p style={{fontWeight:"normal"}}>Plating</p>
                            <h6>Gold-Plated</h6>
                            <hr />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} lg={6}></Col>
                <Col xs={12} md={6} lg={6}>
                    <h4>Rating <FaRegStar /></h4>
                    <img src={rate2} style={{ width: "100%" }} alt="Star Rating" />
                    <hr />
                    <p style={{ color: "red" }}>View All 5495 Reviews</p>
                    <h5>Product Code: 2378361</h5>
                    <p style={{ fontWeight: "normal" }}>
                       Seller: <span style={{ color: "rgb(245, 43, 184)", fontWeight: "bold" }}>Truenet Commerce</span>
                    </p>
                    <p>View Supplier Information</p>
                </Col>
            </Row>

            {showBagNotification && (
                <div
                    className="bag-notification"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000
                    }}
                >
                    Item added to bag!
                </div>
            )}
        </Container>

        <Footer />

        </>
    );
};