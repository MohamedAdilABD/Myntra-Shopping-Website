import React, { useState , useEffect } from "react";

import './normal.css';
import './form.css';
import Navbar from "./Navbar";


export default function Signup()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password ||!phone) {
          alert('Please fill in both fields');
          return;
        }
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Phone:', phone);
    
        setUsername('');
        setPassword('');
        setPhone('');
    };

    return(
        <>

        <Navbar />

        <div className='login bg-dark' style={{marginTop:"60px"}}>
            <h1 className='text-white text-center  p-3 '> SIGNIN FORM  </h1>
            
            <form  onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="email"  placeholder='User Name'  value={username}  onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password"  placeholder='User Password' value={password}  onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <label>Phone_No :</label>
                    <input type="phone"  placeholder='User Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
     
                <button type="submit" className='mt-2 w-50 text-center bg-info' style={{marginLeft:"13px",borderRadius:"25px"}}>Login   </button>  
      
                <div className=' text-end'>
                    <a href="#" className='forgot-password text-primary'>Forget Password?</a>
                </div>
            </form>
        </div>    
        
        </>
    );
};