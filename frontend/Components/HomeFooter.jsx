import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImInstagram } from 'react-icons/im';
import style from "../styles/HomeFooter.module.css"
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';

const HomeFooter = () => {
  return (
    <div className={` ${style.footerContainer}`}>
        <div className={style.footerMainContainer}>
            <div className="flex  items-center justify-between">
                <div className="flex gap-5 items-center ">
                    <p className='mb-0 pb-0 '>© 2022 Airbnb, Inc.</p>
                    <ul className="flex m-0 gap-5">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 font-semibold">
                    <div className='flex items-center gap-2'>
                        <TbWorld />  <span className='px-2'>English (US)</span>
                    </div>
                    <div>
                        $ USD
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span>Support & resources</span> <IoIosArrowUp className={style.arrowIcon}/>
                    </div>              
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFooter