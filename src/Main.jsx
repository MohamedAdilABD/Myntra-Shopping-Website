import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Bag from "./Bag";
import Beauty from "./Beauty";
import Footer from "./Footer";
import Home from "./Home";
import Kids from "./Kids";
import Mens from "./Mens";
import Navbar from "./Navbar";
import Nopage from "./Nopage";
import Singup from "./Signup";
import Womens from "./Womens";

export default function Main()
{
    return(
        <>

        <BrowserRouter>
        
        <Routes>

            <Route path="/myntra" element={<Home /> } />
            <Route path="/kids" element={<Kids />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/signup" element={<Singup />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />

        </Routes>
        
        </BrowserRouter> 
             
        </>
    );
};