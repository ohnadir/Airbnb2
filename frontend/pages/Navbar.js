import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { BsCartCheckFill} from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.png';
import { Drawer } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';




import Image from 'next/image'

const Navbar = () => {
    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [cartOpen, setCartOpen] = useState(false)
    const [keyword, setKeyword] = useState('');

    /* const menuLists = <>
        <button className='text-white block md:hidden' onClick={()=>setOpen(!open)}><BiSearchAlt2 className='text-2xl'/></button>
        
    </> */
    return (
        <div className='border'>
            <div className='max-w-7xl mx-auto px-2 '>
                <div className='flex items-center justify-between text-black '>
                    <div className='flex justify-start'>
                        <Image
                            src={logo}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className={styles.searchContainer}>
                        <div className='flex items-center gap-4'>
                            <div>
                                Anywhere
                            </div>
                            <div className={styles.hr}>
                                <p></p>
                            </div>
                            <div>
                                Any week
                            </div>
                            <div className={styles.hr}>
                                <p></p>
                            </div>
                            <div>
                                Add Guests
                            </div>
                            <div className={styles.searchBtn}>
                                <HiSearch className={styles.icon} />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                         <div className={styles.userMenu} onClick={()=>setDropdown(!dropdown)}>
                            <BiMenu className='cursor-pointer text-xl '/>
                            <span onClick={()=>setCartOpen(true)} >
                                <FaUserCircle className=' text-2xl ' />
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;