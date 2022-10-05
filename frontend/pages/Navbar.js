import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.png';
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
        <div className='border py-4'>
            <div className='max-w-7xl mx-auto px-2 relative'>
                <div className='flex items-center justify-between text-black '>
                    <div className='flex justify-start'>
                        <Image
                            className={styles.logo}
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
                            <BiMenu className='cursor-pointer text-2xl '/>
                            <span onClick={()=>setCartOpen(true)} >
                                <FaUserCircle className=' text-3xl ' />
                            </span>
                        </div>
                        
                    </div>
                </div>
                {
                    dropdown && <div className={styles.dropDown}>
                        <ul>
                            <li>Signup</li>
                            <li>Login</li>
                        </ul>
                        <p className={styles.dropDownHr}></p>
                        <ul>
                            <li>Host Your Home</li>
                            <li>Host an experience</li>
                            <li>Help</li>
                        </ul>
                        
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;