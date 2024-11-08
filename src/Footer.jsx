import React from "react";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

import './normal.css';

import original from '../images/orginal.png';
import app from '../images/app.png';


export default function Footer()
{
    return(
        <>
        <Container fluid className="footer p-3 text-center bg-light mt-5">
             
            <Container>
               <Row>
                   <Col xs={3}>
                        <h5> ONLINE SHOPPING </h5>
             
                        <ul>
                            <li> MENS </li>
                            <li> WOMENS </li>
                            <li> KIDS </li>
                            <li> BEAUTY </li>
                            <li> HOME & LIVING </li>
                            <li> STUDIO </li>
                        </ul>
                    </Col>
             
                   <Col xs={3}>
                        <h5> CUSTOMER POLICIES </h5>
                   
                        <ul>
                            <li> Contact Us</li>
                            <li> FAQ </li>
                            <li> T&C </li>
                            <li> Terms Of Uses </li>
                            <li> Track Orders </li>
                            <li> Shipping </li>
                            <li> Canclellation </li>
                            <li> Returns </li>
                            <li> Privacy Policy </li>
                            <li> Grienance Officer </li>
                        </ul>
                   </Col>
             
                   <Col xs={3}>
                        <h5> EXPERIENCE MYNTRA APP ON MOBILE </h5>
                        <img src={app} />
                   </Col>
             
                   <Col xs={3}>
                        <img src={original} alt="guarantee all products" />
                   </Col>
               </Row>

                <Row>
                    <h4 className="text-primary "> POPULAR SEARCHES </h4>
                    <hr></hr>
                    <p>
                        Kurta Pajama | Leather Jackets | Sherwani | Shirts | T-Shirts |
                        Waistcoat | Photo Frames | Denim Shirts | Blazers | Mirror | Bags |
                        Jackets | Blouse Designs | Crop Tops | Mysore Silk Saree | Kids Lehenga
                        | Suit Design | Lehenga | Girl Dungarees | Top for Girl | Top for Girl |
                        Lingerie | Gowns | Saree | Kids Ethnic Wear | Sweaters | Boys Games |
                        Barbie Doll | Shoes For Men | Cricket Shoes | Lipstick | Make Up Kit |
                        Fastrack Watches | Casual Shoes | Online Shopping | Dresses | Babydolls
                        | Eye Makeup | Car Games | Nike Shoes | Puma | United Colors of Benetton
                        | Fastrack | Watches | Backpacks | Men Kurtas | Titan Watches               
                    </p>
                    <hr ></hr>
              </Row>

            </Container>
              
            <Row className="mt-2">
                <Col xs={3} className="mt-2">
                        <p> In case of any concern, <span className="text-primary"> Contact Us </span>  </p>
                </Col>
             
                <Col xs={3} >
                    <i className="fa-brands fa-twitter p-2 "></i>           
                    <i className="fa-brands fa-facebook p-2"></i>
                    <i className="fa-brands fa-youtube p-2"></i>
                    <i className="fa-brands fa-instagram p-2"></i>
                </Col> 
             
                <Col xs={3} className="mt-2">
                    <p> © 2024 www.myntra.com. All rights reserved. </p>
                </Col>
             
                <Col xs={3} className="mt-2">
                        <p> A Flipkart company </p>
                </Col>
                <hr></hr>
            </Row>
             
            <Row>
                <Col xs={6}>
                    <h5> Registered Office Address </h5>
                    <br/> 
                    <address style={{textAlign:"left"}}>
                            Buildings Alyssa, <br />
                            Begonia and Clover situated in Embassy Tech Village, <br />
                            Outer Ring Road, <br />
                            Devarabeesanahalli Village, <br />
                            Varthur Hobli, <br />
                            Bengaluru – 560103, India
                    </address>
                </Col>
             
                <Col xs={6} className="mt-5">
                        <p> CIN: U72300KA2007PTC041799 </p>
                        <p> TelePhone : <span> +91-80-61561999 </span> </p>
                </Col>
                   <hr></hr>
            </Row>
             
             
        </Container>
              
        </>
    );
};