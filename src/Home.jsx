import React , {useState , useEffect} from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./normal.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import offer from '../images/offer.png';
import coupens from '../images/coupens.png';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';

import deal1 from '../images/deal1.png';
import deal2 from '../images/deal2.png';
import deal3 from '../images/deal3.png';
import deal4 from '../images/deal4.png';
import deal5 from '../images/deal5.png';
import deal6 from '../images/deal6.png';

import brands from '../images/brands.png';
import western from '../images/western.png';
import trending from '../images/trending.png';
import indian from '../images/indian.png';
import category from '../images/category.png';
import footwear from '../images/footwear.png';
import sports from '../images/sports.png';
import style1 from '../images/style1.png';
import style2 from '../images/style2.png';


export default function Home()
{
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
          <span key={interval}>
            {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]} {interval}{" "}
          </span>
        );
    });

    // Image data for different sections
    const mensImages = [
        { title: " ", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/29/00e27983-d373-4d86-9f25-3e46a18ec12a1690609817622-Top_casual_Styles-_Levi-s-_Tommy_Min_40.png"},
        { title: " ", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/3a834277-7c69-4e28-b50d-79a1a50fb4e81691079063461-image_png_762128704--1-.png" },
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png" },
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6ddcd2e5-20c6-4672-9b02-7d2117550f641691142512854-image_png242033865.png" } 
    ];

    const womensImages = [
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png" },
        { title: " ", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6366f7f4-3942-4cbc-af0d-3b63c0f9add71691142685532-image_png45885503.png" },
        { title: "", image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png"},
        { title: "", image:"https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_223,c_limit,fl_progressive/w_223,h_293,q_50,dpr_2,fl_progressive/assets/images/2024/5/29/efd67c87-5949-491e-8319-463089d5f76d1716965725618-Card11.png" } 
    ];

    const kidsImages = [
        { title: "", image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/16/a8d21812-cc15-4272-a52b-1e9bc151d2921692168154190-ctt.jpg" },
        { title: "", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/16/b6faa8fc-9441-4cd2-b170-034165bec5371692167205209-aj2.jpg" },
        { title: "", image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/14/937f7591-3079-4e9c-9900-49d958495e131692015704516-bb1.jpg" },
        { title: "", image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/8/14/764a5b50-4da3-455f-abab-5efe3347d3511692004116109-sak.jpg" } 
    ];

    const BeautyImages = [
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw00vLeZTtuzxdBWLKVtPFjvH15CfGb13RWw&s"},
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_8VF1ScrkxPNfhFBFw6AYkU7TqHZZZeF25S8k8J4VKltQoaYocIPBarHKjiSAubccFA&usqp=CAU" },
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpc0bEaN2JKTAcG92KDMYlWsxBx2ePXK8YUJvyHPny5AXDlpvmb1DDpBmyt7W_9vud2Ug&usqp=CAU" },
        { title: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvDwoJ166IOQspcFJmk54n4GwTHZ06NwI1SafNlkZOS2YncVjPjg_vwCBrz0hOOjjP4E&usqp=CAU" }
    ];

    // Filter images based on searchTerm for each section
    const filteredMensImages = mensImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredWomensImages = womensImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredKidsImages = kidsImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredBeautyImages = BeautyImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(
        <>

        <Navbar />

        <Container fluid className="time text-center bg-white p-4">
            <div className="countdown">
                <span>Super Saver Sale Ends In</span>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
            <img src={offer} alt="Offer Deal" />
            <img src={coupens} alt="Coupens" />
            
            <Carousel controls={false} indicators={true} className="custom-carousel ">
                <Carousel.Item interval={1500}>
                    <Link to={'/mens'}>
                        <img className="d-block w-100 h-75 " src={slide1} alt="First slide" />
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={1500} >
                    <Link to={'/womens'}>
                        <img className="d-block w-100 h-75" src={slide2} alt="Second slide" />
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <Link to={'/kids'}>
                        <img className="d-block w-100 h-75" src={slide3} alt="Third slide" />
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <Link to={'/beauty'}>
                        <img className="d-block w-100 h-75" src={slide4} alt="Fourth slide" />
                    </Link>
                </Carousel.Item>
            </Carousel>
            
 

            <Container fluid className="mt-5">
                <Link to={'/mens'}>
                <Carousel controls={false} indicators={true} className="carousel">
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100 h-75" src={style1} />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100 h-75" src={style2}  />
                    </Carousel.Item>
                </Carousel>
                </Link>
            </Container>
        </Container>


        <Container fluid className="bg-white mt-1">
            <h1 className="text-center p-4 mt-2 text-primary"> SHOP BY CATEGORY </h1>
            <Row>
                <Col className="mt-2" xs={12} md={6} lg={2}>
                    <Link to={'/beauty'}>
                        <img src={deal1} style={{width:"90%" , marginLeft:"5%"}} />
                    </Link>
                </Col>
                <Col className="mt-2" xs={12} md={6} lg={2}>
                    <Link to={'/womens'}>
                        <img src={deal2} style={{width:"85%" , marginLeft:"5%"}} />
                    </Link>
                </Col>
                <Col className="mt-2" xs={12} md={6} lg={2}>
                    <Link to={'/kids'}>
                        <img  src={deal3}  style={{width:"85%" , marginLeft:"5%"}} />
                    </Link>
                </Col>
                <Col className="mt-2" xs={12} md={6} lg={2}>
                    <Link to={'/mens'}>
                        <img src={deal4}  style={{width:"85%" , marginLeft:"5%"}} />
                    </Link>
                </Col>
                <Col className="mt-2" xs={12} md={6} lg={2}>
                    <Link to={'/mens'}>
                        <img src={deal5}  style={{width:"85%" , marginLeft:"5%"}} />
                    </Link>
                </Col>
                <Col className="mt-2" xs={12} md={6} lg={2}>
                    <Link to={'/beauty'}>
                        <img src={deal6}  style={{width:"85%" , marginLeft:"5%"}} />
                    </Link>
                </Col>
            </Row>
        </Container>


        {/* MENS section */}
        <Container fluid className="mt-5 ">
            <h2 className="p-3 text-dark">MENS</h2>
            <Container className="bg-light">
                <Link to={'/mens'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="men" xs={1} sm={2} md={3} lg={4}>
                        { filteredMensImages.length > 0 ? (
                            filteredMensImages.map((item, index) => (
                                <Col  key={index}>
                                    <img className="img-fluid" src={item.image} title={item.title} alt={`Mens ${item.title}`} />
                                    <p>{item.title}</p>
                                </Col>
                        ))
                        ) : (
                        <p>No matching images found</p>
                        
                        ) }
                    </Row>
                </Link>
            </Container>
        </Container>

        {/* WOMENS section */}
        <Container fluid className="mt-3">
            <h2 className="p-3 text-dark">WOMENS</h2>
            <Container className="bg-light">
                <Link to={'/womens'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="women"  xs={1} sm={2} md={3} lg={4}>
                        { filteredWomensImages.length > 0 ? ( 
                            filteredWomensImages.map((item, index) => (
                                <Col  key={index}>
                                    <img src={item.image} title={item.title} alt={`Womens ${item.title}`} />
                                    <p>{item.title}</p>
                                </Col>
                            ))
                        ):(
                        <p>No matching images found</p>

                        )}
                    </Row>
                </Link>
            </Container>
        </Container> 

        {/* KIDS section */}
        <Container fluid className=" mt-3">
            <h2 className=" p-3 text-dark">KIDS</h2>
            <Container className="bg-light">
                <Link to={'/kids'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="kids"  xs={1} sm={2} md={3} lg={4}>                   
                        {  filteredKidsImages.length > 0 ? (
                            filteredKidsImages.map((item, index) => (
                                <Col   key={index}>
                                    <img src={item.image} title={item.title} alt={`Kids ${item.title}`} />
                                    <p>{item.title}</p>
                                </Col>
                            ))
                        ):(
                            <p>No matching images found</p>
                        )}
                    </Row>
                </Link>
            </Container>
        </Container>

        {/* BEAUTY section */}
        <Container fluid className="mt-3" >
            <h2 className="p-3 text-dark">BEAUTY</h2>
            <Container className="bg-light">
                <Link to={'/beauty'} style={{textDecoration:"none" , color:"black"}} >
                    <Row className="beauty"  xs={1} sm={2} md={3} lg={4}>
                        {  filteredBeautyImages.length > 0 ? (
                            filteredBeautyImages.map((item, index) => (
                                <Col  key={index}>
                                    <img src={item.image} title={item.title} alt={`Beauty ${item.title}`} />
                                    <p>{item.title}</p>
                                </Col>
                            ))
                        ):(
                            <p>No matching images found</p>
                        )}
                    </Row>
                </Link>
            </Container>
        </Container>

        <Container fluid className="trends">
            <Link to={'/beauty'} style={{textDecoration:"none"}}>
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN ACCESSORIES </h3>
                    <img src={trending} alt="trending ACCESSORIES" />
                </Row>
            </Link>    

            <Link to={'/womens'} style={{textDecoration:"none"}}>
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > EXPLORE TOP BRANDS </h3>
                    <img src={brands} alt="brands" />               
                </Row>
            </Link>

            <Link to={'/womens'} style={{textDecoration:"none"}}>
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > CATEGORIES TO BAG </h3>
                    <img src={category}  alt="categories" />
                </Row>
            </Link>

            <Link to={'/womens'} style={{textDecoration:"none"}}>
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN WESTERN WEAR </h3>
                    <img src={western} alt="western wear" />
                </Row>
            </Link>

            <Link to={'/womens'} style={{textDecoration:"none"}}>
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" >TRENDING IN INDIAN WEAR</h3>
                    <img src={indian} alt="indian trending" />
                </Row>
            </Link>

            <Link to={'/womens'} style={{textDecoration:"none"}}>
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN SPORTS WEAR </h3>
                    <img src={sports}  alt="sports wears" />
                </Row>
            </Link>

            <Link to={'/beauty'} style={{textDecoration:"none"}}>
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN FOOTWEAR </h3>
                    <img src={footwear}  alt="footwears" />
                </Row>
            </Link>

        </Container>

        <Footer />
        </>
    );
};