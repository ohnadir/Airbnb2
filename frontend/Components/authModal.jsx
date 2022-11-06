import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import style from '../styles/authModal.module.css'
import { message } from 'antd';
import { useEffect } from 'react';

const authModal = () => {
    const [countryCode, setCountryCode] = useState(false);
    const [number, setNumber] = useState(false);
    

    const google=()=> {
        window.open("http://localhost:5001/auth/google",  "_blank", 
        " width=500,height=500");
    };
    const github = () => {
        window.open("http://localhost:5001/auth/github",  "_blank", 
        " width=500,height=500");
    };
    
    const facebook = () => {
        window.open("http://localhost:5001/auth/facebook", "_blank", 
        " width=500,height=500");
    }; 
    
  return (
    <div className='px-5 pb-2 mt-6'>
        <h1 className='text-2xl mb-5'>Welcome to Airbnb</h1>
        <section className="numberContainer">
            <div className={style.numberContainer}>
                <div style={{outline: countryCode ? "2px solid black" : "", borderRadius: countryCode ? "7px" : ""}} onClick={()=>setCountryCode(!countryCode)} className={style.countryContainer}>
                    <div >
                        <p className='mb-0 text-xs'>Country/Region</p>
                        <h2 className='m-0'>United State (+1)</h2>
                        
                    </div>
                    <FiChevronDown className='text-2xl' />
                </div>
                {
                    countryCode && <div className={style.countryCodeDropdown}>
                        <ul className={style.countryCodeContainer}>
                            <li>United State (+1)</li>
                            <li>United State (+1)</li>
                            <li>United State (+1)</li>
                        </ul>
                    </div>
                }
                <div  className={style.numberCodeContainer} style={{outline: number ? "2px solid black" : "", borderRadius: number ? "7px" : ""}} >
                    {
                        number ? 
                        <div>
                            <p onClick={()=>setNumber(!number)} className='mb-0 text-xs '>Phone Number</p>
                            <div className='flex gap-1'>
                                <span>+211</span>
                                <input  type="text" />
                            </div>
                        </div> 
                        :
                        <h2 onClick={()=>setNumber(!number)} className={style.phoneNumber}>Phone Number</h2>
                    }
                </div>
            </div>
            <span className='text-xs'>We'll call or text you to confirm your number. Standard message and data rates apply. <span className='underline font-bold'>Privacy Policy</span></span>    
        </section>
        <section className="btn mt-4">
            <button  className={style.authBtn}>Continue</button>
        </section>
        <section className="divider">
            <div className='flex items-center gap-6'>
                <div className={style.authDivider}>
                    <p></p>
                </div>
                <div>
                    or
                </div>
                <div className={style.authDivider}>
                    <p></p>
                </div>
            </div>
        </section>
        <section className="socialAuth">
            <div onClick={facebook}  className={style.socialIcon}>
                <img className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711218/facebook_iukumb.png" alt="" />
                <h2 className='m-0'>Continue with Facebook</h2>
            </div>
            <div onClick={google} className={style.socialIcon}>
                <img  className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711180/search_nlfgqn.png" alt="" />
                <h2 className='m-0'>Continue with Google</h2>
            </div>
            <div onClick={github} className={style.socialIcon}>
                <img className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666717428/apple_ouqww9.png" alt="" />
                <h2 className='m-0'>Continue with Apple</h2>
            </div>
            <div className={style.socialIcon}>
                <img className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666717428/email_i5xejg.png" alt="" />
                <h2 className='m-0'>Continue with Email</h2>
            </div>
        </section>
    </div>
  )
}

export default authModal