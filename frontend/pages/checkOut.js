import { IoIosArrowUp } from "react-icons/io";
import style from '../styles/checkOut.module.css'
import { BiChevronDown } from 'react-icons/bi';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { GrApple } from 'react-icons/gr';
import { TbMail } from 'react-icons/tb';
// import Footer from "../Component/Footer";

export default function checkOut() {
  return (
    <div className=" max-w-7xl mx-auto  mt-10">
        <div className="flex justify-between px-10 mb-16">
            <div className='w-[45%]'>
                <section>
                    <h2 className='text-[22px] text-[#222222] font-bold font-sans mb-2'>Your trip</h2>
                    <div className="flex items-center justify-between">
                        <div >
                            <h2 className='text-[16px] text-[#222222] font-bold m-0'>Dates</h2>
                            <h5 className='text-[16px] text-[#222222] mb-2'>Oct 20 - 21</h5>
                        </div>
                        <span className="underline font-bold">Edit</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className='text-[16px] text-[#222222] font-bold m-0'>Guests</h2>
                            <h5 className='text-[16px] text-[#222222] mb-2'>1 guest</h5>
                        </div>
                        <span className="underline font-bold">Edit</span>
                    </div>
                </section>
                <div className={style.checkOutDivider}>
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
            <div className='w-[45%] '>
                <div className='border p-6 rounded-lg' >
                    <div className="flex gap-5">
                        <img className="rounded-lg w-[150px]" src="https://a0.muscache.com/im/pictures/fa2ed873-e726-4e6d-ab1a-28bc7c69d805.jpg?aki_policy=large" alt="" />
                        {/* <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" /> */}
                        <div>
                            <p className="m-0 text-[14px]">Dome</p>
                            <p className="m-0 mt-[-5px] text-[16px]">Lily Beach Resort & Spa, <br/> Maldives, With Pool, AI</p>
                        </div>
                    </div>
                    <div className={style.cardDivider}>
                        <p></p>
                    </div>
                    <h2 className='text-[16px] my-6 flex items-center gap-2  text-[#696969]'>Your booking is protected by <img className="w-[70px]" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" /></h2>
                    <div className={style.cardDivider}>
                        <p></p>
                    </div>
                    <h2 className='text-[22px] my-5 text-[#222222] font-bold font-sans mb-2'>Price details</h2>
                    
                    <div className="">
                        <div className='flex text-[#696969] items-center justify-between font-[400] text-[16px] '>
                            <span>$2,924.54 AUD x 1 night</span>
                            <span>$2,924.54 AUD</span>
                        </div>
                        <div className=' flex items-center justify-between  text-[17px]'>
                            <span className="text-[#696969]">Service fee</span>
                            <span className="text-[#54B157]">$24 AUD</span>
                        </div>
                        <div className={style.cardDivider}>
                            <p></p>
                        </div>
                        <div className='text-[#404040] flex items-center justify-between font-bold text-[16px]'>
                            <span>Total (AUD)</span>
                            <span >$197 AUD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}