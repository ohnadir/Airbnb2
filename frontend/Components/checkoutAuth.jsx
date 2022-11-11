import React from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { FaFacebookF, FaGoogle, FaLock } from 'react-icons/fa';
import { GrApple } from 'react-icons/gr';
import { TbMail } from 'react-icons/tb';
import { IoIosArrowUp } from "react-icons/io";
import style from '../styles/checkOut.module.css'

const checkoutAuth = () => {
  return (
    <div>
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
                <p className="text-[12px] text-[#696969] my-[16px]">We'll call or text you to confirm your number. Standard message and data rates apply. <span className="font-bold underline cursor-pointer">Privacy Policy</span></p>
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
                        <FaFacebookF className="text-blue-400"/>
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
        </section>
    </div>
  )
}

export default checkoutAuth