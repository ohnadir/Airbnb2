import React, { useEffect, useState } from 'react'
import style from "../styles/HomeFooter.module.css"
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import {  Modal } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import SupportModal from "../Components/Modal/SupportModal"
import CurrencyModal from "../Components/Modal/CurrencyModal"
import LanguageModal from "../Components/Modal/LanguageModal"

const HomeFooter = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [options, setOptions] = useState("");
    const [currency, setCurrency] = useState()
    const handleOption = (name) => {
        setOptions(name);
        setModalOpen(true)
    };
    
    
    const handleCurrency = (currencyValue) => {
        useEffect(() => {
            setCurrency(currencyValue);
        }, [currencyValue])
    }
    console.log(currency)
    
    return (
    <div className={` ${style.footerContainer}`}>
        <div className={style.footerMainContainer}>
            <div className="flex text-sm  items-center justify-between">
                <div className="flex gap-5 items-center ">
                    <p className='mb-0 pb-0 '>© 2022 Airbnb, Inc.</p>
                    <ul className="flex m-0 gap-5">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 text-sm font-semibold">
                    <div onClick={() => handleOption("language")} className='flex cursor-pointer items-center gap-2'>
                        <TbWorld />  
                        <div className={style.footerOption}>
                            <span >English (US)</span>
                        </div>
                    </div>
                    <div className='cursor-pointer flex gap-1' onClick={() => handleOption("currency")}>
                        {
                            [0]?.code ?  
                            <span>{[0]?.code}</span> 
                            :
                            <span>$</span>
                        }
                            
                        {/* <span>$</span> */}
                        <div className={style.footerOption}>
                        {
                            ([1]?.name) ?  
                            <span>{[1]?.name}</span> 
                            :
                            <span>USD</span>
                        }
                        </div>
                    </div>
                    <div onClick={() => handleOption("support")} className='flex gap-1 cursor-pointer items-center'>
                        <div className={style.footerOption}>
                            <span >Support & resources</span> 
                        </div>
                        <IoIosArrowUp  className={style.arrowIcon}/>
                    </div>              
                </div>
            </div>
        </div>
        {
            modalOpen &&  
                <Modal
                    centered
                    open={modalOpen}
                    width={870}
                    closable={false}
                    footer={false}
                    className={{borderRadius:"30px"}}
                    bodyStyle={{
                        margin:"0", border:"none", 
                        padding:0
                    }}
                    >
                    <div className=' pt-5'>
                        <div className='mb-0 px-4 '>
                            <RiCloseFill onClick={() => setModalOpen(false)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                        </div>
                        <div className='px-5 mt-1'>
                            { options === "language" && <LanguageModal/> }
                            { options === "currency" && <CurrencyModal handleCurrency={handleCurrency} /> }
                            { options === "support" && <SupportModal/> }
                        </div>
                    </div>
                </Modal>
        }
    </div>
  )
}

export default HomeFooter