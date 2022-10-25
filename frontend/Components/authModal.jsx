import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import style from '../styles/authModal.module.css'

const authModal = () => {
    const [countryCode, setCountryCode] = useState(false);
    const [number, setNumber] = useState(false)
    const handleNumber=(e)=>{
        console.log(e);
    }
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
                <div className={style.numberCodeContainer} style={{outline: number ? "2px solid black" : "", borderRadius: number ? "7px" : ""}} onClick={()=>setNumber(!number)}>
                    
                    <div>
                        <p className='mb-0 text-xs'>Phone Number</p>
                        <div className='flex gap-1'>
                            <span>+211</span>
                            <input  type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <span className='text-xs'>We’ll call or text you to confirm your number. Standard message and data rates apply. <span className='underline font-bold'>Privacy Policy</span></span>    
        </section>
        <section className="btn mt-4">
            <button className={style.authBtn}>Continue</button>
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
            <div className={style.socialIcon}>
                <img className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711218/facebook_iukumb.png" alt="" />
                <h2 className='m-0'>Continue with Facebook</h2>
            </div>
            <div className={style.socialIcon}>
                <img className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711180/search_nlfgqn.png" alt="" />
                <h2 className='m-0'>Continue with Google</h2>
            </div>
            <div className={style.socialIcon}>
                <img className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666717428/apple_ouqww9.png" alt="" />
                <h2 className='m-0'>Continue with Apple</h2>
            </div>
            <div className={style.socialIcon}>
                <img className={style.icon} src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666717428/email_i5xejg.png" alt="" />
                <h2 className='m-0'>Continue with Email</h2>
            </div>
        </section>
                {/* <div className={style.checkOutDivider}>
                    <p></p>
                </div>
                <section className={style.authSection}>
                    <div>
                        <h2 className='text-[22px] text-[#222222] font-bold font-sans mb-2'>Log in or sign up to book</h2>
                        <div className={style.numberContainer}>
                            <div className={style.countryContainer}>
                                <div className="m-0 py-[10px] px-[8px] text-[16px]">
                                    <span className="text-[12px] text-[#696969]">Country/Region</span>
                                    <p className="m-0">United State (+1)</p>
                                </div>
                                <BiChevronDown className="text-2xl"/>
                            </div>
                            <input type="" name="" value="" placeholder="Phone Number"  />
                        </div>
                        <p className="text-[12px] text-[#696969] my-[16px]">We’ll call or text you to confirm your number. Standard message and data rates apply. <span className="font-bold underline cursor-pointer">Privacy Policy</span></p>
                    </div>
                    <button className={style.authBtn}>Continue</button>
                    <div className=" flex items-center gap-7">
                        <div className={style.checkOutDivider}>
                            <p></p>
                        </div>
                        <span>or</span>
                        <div className={style.checkOutDivider}>
                            <p></p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className={style.socialIcon}>
                                <FaFacebook className="text-blue-400"/>
                            </div>
                            <div className={style.socialIcon}>
                                <FaGoogle/>
                            </div>
                            <div className={style.socialIcon}>
                                <GrApple/>
                            </div>
                        </div>
                        <div className={style.socialMailIcon}>
                            <TbMail className="absolute left-4 text-[26px]"/> Continue
                        </div>
                    </div>
                </section> */}
            

    </div>
  )
}

export default authModal