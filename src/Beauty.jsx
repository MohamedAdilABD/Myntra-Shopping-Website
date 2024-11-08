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


import bt1 from '../images/bt1.png';
import bt2 from '../images/bt2.png';
import bt3 from '../images/bt3.png';
import bt4 from '../images/bt4.png';
import bt5 from '../images/bt5.png';
import bt6 from '../images/bt6.png';
import rate3 from '../images/rate3.png';
import star2 from '../images/star2.png';


export default function Beauty()
{
    
  const [selectedSize, setSelectedSize] = useState("");
  const [showBagNotification, setShowBagNotification] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const sizes = ["30ml", "50ml"];

  useEffect(() => {
    if (showBagNotification) {
      const timer = setTimeout(() => {
        setShowBagNotification(false);
      }, 10000);
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
        price: 699,
        image: bt5,
        brand: "Maybelline",
        description: "New York Fit Me Matte+Poreless Liquid Foundation + Primer",
        code: "27926514",
        seller: "Vision Star"
      };

      const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const updatedCartItems = [...existingItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      setCartItems(updatedCartItems);
      setShowBagNotification(true);

    } else {
      alert("Please select a size.");
    }
  };

  return(
    <>

    <Navbar />

    <Container fluid className="purchase bg-white mt-3">
      <Row>
        <Col xs={12} md={3} className="p-2">
          <img src={bt1} alt="Beauty Product 1" style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={3} className="p-2">
          <img src={bt2} alt="Beauty Product 2" style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={6} className="p-2">
          <h2 className="text-primary"><b>Maybelline</b></h2>
          <p>New York Fit Me Matte+Poreless Liquid Foundation + Primer - 30ml Each</p>
          <img src={rate3} style={{ width: "150px" }} alt="Rating" />
          <hr />
          <p>MRP <span><FaRupeeSign />699</span></p>
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
          <Button
            style={{ width: "100%", maxWidth: "200px", padding: "13px", color: "black", border: "1px solid black" }}
            variant="light"
          >
            <FaRegHeart style={{ marginRight: "8px", marginBottom: "4px" }} /> WISHLIST
          </Button>{' '}
        </Col>
      </Row>

      {/* Product Detail Section */}
      <Row className="mt-3">
        <Col xs={12} md={3} className="p-2">
          <img src={bt3} style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={3} className="p-2">
          <img src={bt4} style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={6} className="p-2">
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

      <Row className="mt-4">
        <Col xs={12} md={3} className="p-2">
          <img src={bt5} style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={3} className="p-2">
          <img src={bt6} style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={6} className="p-2">
          <h4>PRODUCT DETAILS <BiDetail style={{ marginBottom: "5px" }} /></h4>
          <p style={{ fontWeight: "normal" }}>Type: Tricycle</p>
          <p style={{ fontWeight: "normal" }}>Colour: yellow & black</p>
          <p style={{ fontWeight: "normal" }}>Operation Mode: battery Operation</p>
          <p style={{ fontWeight: "normal" }}>Material: Plastic</p>

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
            <Col xs={12} md={6} className="p-2">
              <p style={{ fontWeight: "normal" }}>Operation Mode</p>
              <h6>Manual Operation</h6>
              <hr />
              <p style={{ fontWeight: "normal" }}>Material</p>
              <h6>Metal</h6>
              <hr />
              <p style={{ color: "red" }}>See More</p>
            </Col>

            <Col xs={12} md={6} className="p-2">
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

      <Row className="mt-4">
        <Col xs={12} md={6}>
        </Col>
        <Col xs={12} md={6} className="p-2">
          <h4>Rating <FaRegStar /></h4>
          <img src={star2} style={{ width: "50%" }} alt="Rating" />
          <hr />
          <p style={{ color: "red" }}>View All 5495 Reviews</p>
          <h5>Product Code: 27926514</h5>
          <p style={{ fontWeight: "normal" }}>
            Seller: <span style={{ color: "rgb(245, 43, 184)", fontWeight: "bold" }}>Vision Star</span>
          </p>
          <p style={{ color: "red" }}>View Supplier Information</p>
        </Col>
      </Row>

      {showBagNotification && (
        <div
          className="bag-notification"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#28a745",
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