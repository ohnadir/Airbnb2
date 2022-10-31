import React, { useEffect, useState } from 'react'
import style from "../styles/HomeFooter.module.css"
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import {  Modal } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import SupportModal from "../Components/Modal/SupportModal"
import CurrencyModal from "../Components/Modal/CurrencyModal"
import LanguageModal from "../Components/Modal/LanguageModal";
import {getToCurrency, getToLanguage} from "../Components/LocalStorage"

const HomeFooter = () => {
    const [options, setOptions] = useState("");
    const [currency, setCurrency] = useState();
    const [language, setLanguage] = useState()
    const handleOption = (name) => {
        setOptions(name);
        // setOptions("")
    };
    const value = getToCurrency(); 
    const value1 = getToLanguage(); 
    useEffect(() => {
        setCurrency(value);
        setLanguage(value1);
    }, [value, value1]);
    const code = currency?.split(" ")[0]
    const name = currency?.split(" ")[1]
    const lang = language?.split(" ")[0]
    const countryCode = language?.split(" ")[1]
    
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
                            <span >{lang} </span>
                            <span>({countryCode})</span>
                        </div>
                    </div>
                    <div className='cursor-pointer flex gap-1' onClick={() => handleOption("currency")}>
                        
                        <span className='text-center'>{code}</span> 
                        <div className={` ${style.footerOption}`}>
                            <span className='text-center'>{name}</span>
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
            options &&  
                <Modal
                    centered
                    open={options}
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
                            <RiCloseFill onClick={() => setOptions("")} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                        </div>
                        <div className='px-5 mt-1'>
                            { 
                                options === "language" && <LanguageModal/>  ||
                                options === "currency" && <CurrencyModal /> || 
                                options === "support" && <SupportModal/> 
                            }
                        </div>
                    </div>
                </Modal>
        }
    </div>
  )
}

export default HomeFooter