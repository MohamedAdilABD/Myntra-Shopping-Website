import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaRupeeSign, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Bag()
{
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        try {
            const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartItems(savedCartItems);
        } catch (error) {
            console.error("Failed to retrieve cart items:", error);
            setCartItems([]);
        }
    }, []);

    const handleRemove = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        try {
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } catch (error) {
            console.error("Failed to update cart items:", error);
        }
        setCartItems(updatedCartItems);
    };

    const handleQuantityChange = (itemId, quantity) => {
        const updatedCartItems = cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: parseInt(quantity, 10) } : item
        );
        try {
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } catch (error) {
            console.error("Failed to update cart items:", error);
        }
        setCartItems(updatedCartItems);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    };

    return(
        <>
        <Container className="bg-light p-3 mt-3">
            <h2 className="bg-dark text-white text-center p-3">Your Bag</h2>
            <Row>
                {cartItems.length === 0 ? (
                    <Col xs={12}>
                        <p>Your bag is empty</p>
                    </Col>
                ) : (
                    cartItems.map(item => (
                        <Col xs={12} key={item.id} className="mb-3 mt-3">
                            <Row>
                                <Col xs={3} className='text-center'>
                                    <img src={item.image} alt="Product" style={{ width: '50%', height: '200px', objectFit: 'cover' }} />
                                </Col>

                                <Col xs={6}>
                                    <p className='text-primary'><b>{item.brand}</b></p>
                                    <p>{item.description}</p>
                                    <p><strong>Size:</strong> {item.size}</p>
                                    <p><strong>Price:</strong> <FaRupeeSign />{item.price}</p>
                                    <p><b>Quantity:</b>
                                    <Form.Control
                                        type="number" style={{ width: "100px" }}
                                        value={item.quantity || 1}
                                        min="1"
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    /></p>
                                    <h5>Product Code: {item.code}</h5>
                                    <p style={{ fontWeight: "normal" }}>Seller: 
                                      <span style={{ color: "rgb(245, 43, 184)", fontWeight: "bold" }}> {item.seller} </span> 
                                    </p>
                                </Col>

                                <Col xs={3} className="text-right">
                                    <Button
                                        variant="outline-danger mt-5"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        <FaTrash /> Remove
                                    </Button>
                                </Col>
                                
                                <hr />
                            </Row>
                        </Col>
                    ))
                )}
            </Row>
            <Row className="mt-3">
                <Col xs={12} className="text-center">
                    <h3> <span className='text-success'>Total Price:</span> <FaRupeeSign />{calculateTotalPrice().toFixed(2)}</h3>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={12} className="text-center">
                    <Link to="/myntra" style={{ textDecoration: "none" }}>
                        <Button variant="primary">Continue Shopping</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
        </>
    );
};