import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { CgOptions } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { Modal } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import AuthModal from "./authModal";



const Navbar = () => {
    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [authModal, setAuthModal] = useState(false)
    const [dropdown, setDropdown] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false)
    const [show, setShow] = useState(true);
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 0,
        children: 0,
        infants: 0,
        pets:0
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
    };

    /* const menuLists = <>
        <button className='text-white block md:hidden' onClick={()=>setOpen(!open)}><BiSearchAlt2 className='text-2xl'/></button>
        
    </> */
    return (
        <div className='border py-4 sticky top-0 z-50 bg-white'>
            <div className='container mx-auto px-4 relative'>
                <div className='hidden md:block'>
                    <div className='flex items-center justify-between text-black '>
                        <div className='flex justify-start'>
                            <Link href="/">
                                <Image
                                    className="cursor-pointer"
                                    src={logo}
                                    alt="Picture of the author"
                                /> 
                            </Link>
                        </div>
                    <div>
                        {
                            open ? <div className='flex items-center gap-6'>
                                <div className={styles.activeItem}>
                                    Stays
                                </div>
                                <div className={styles.active}>
                                    Experiences
                                </div>
                                <div className={styles.active}>
                                    Online Experiences
                                </div>
                            </div> 
                            : 
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
                                    <div className={styles.searchBtn} onClick={()=>setOpen(!open)}>
                                        <HiSearch className={styles.icon} />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='flex gap-5 items-center'>
                         <div className={styles.userMenu} onClick={()=>setDropdown(!dropdown)}>
                            <BiMenu className='cursor-pointer text-2xl '/>
                            <span >
                                <FaUserCircle className=' text-3xl ' />
                            </span>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <div className='flex justify-between items-center border px-4 rounded-full'>
                        <div className='flex items-center gap-5'>
                            <BiSearch className='text-2xl'/>
                            <div className='py-2'>
                                <h1 className='m-0'>Where to?</h1>
                                <ul className={`flex m-0 gap-1 ${styles.customNav}`}>
                                    <span>Anywhere</span>
                                    <li>Any week</li>
                                    <li>Add guests</li>
                                </ul>
                            </div>
                        </div>
                        <CgOptions onClick={()=>setFilterOpen(!filterOpen)} className='text-4xl cursor-pointer font-bold rounded-full border p-2' />
                    </div>
                </div>
                {
                    open && <div className={styles.destinationContainer}>
                        <div className={styles.destinationItems}>
                            <div className={styles.destinationContent}>
                                <p className={styles.optionHeader}>Where</p>
                                <p className={styles.optionFooter}>Search destinations</p>
                            </div>
                        </div>
                        <div className={styles.divider}>
                            <p></p>
                        </div>
                        <div className={styles.destinationItem}>
                            <div className={styles.destinationContent} onClick={() => setOpenDate(!openDate)}>
                                <p className={styles.optionHeader}>Check in</p>
                                <p className={styles.optionFooter}>
                                    {`${format(date[0].startDate, "MM/dd/yyyy")}`}
                                </p>
                            </div>

                        </div>
                        <div className={styles.divider}>
                            <p></p>
                        </div>
                        <div className={styles.destinationItem} >
                            <div className={styles.destinationContent} onClick={() => setOpenDate(!openDate)}>
                                <p className={styles.optionHeader}>Check out</p>
                                <p className={styles.optionFooter}>
                                    {`${format(date[0].endDate,"MM/dd/yyyy")}`}
                                </p>
                            </div>
                            {
                                openDate && (
                                    <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className={styles.date}
                                    minDate={new Date()}
                                    />
                                )
                            }
                        </div>
                        <div className={styles.divider}>
                            <p></p>
                        </div>
                        <div  className={styles.destinationItem}>
                            <div className={styles.destinationContent}>
                                <div className={styles.btnContainer} onClick={() => setOpenOptions(!openOptions)}>
                                    <div>
                                        <p className={styles.optionHeader}>Who</p>
                                        <p className={styles.optionFooter}>Add Guests</p>
                                    </div>
                                    <div className={styles.calenderSearchBtn} onClick={()=>setOpen(!open)}>
                                        <HiSearch className={styles.icon}/>
                                        <span className='hidden lg:block'>Search</span>
                                    </div>
                                </div>
                                { openOptions && (
                                    <div className={styles.options}>
                                        <div className={styles.optionItem}>
                                            <div className='flex flex-col'>
                                                <span className={styles.optionText}>Adult</span>
                                                <span className={styles.optionBellowText}>Ages 13 or above</span>
                                            </div>
                                            <div className={styles.optionCounter}>
                                                <button
                                                disabled={options.adult <= 0}
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("adult", "d")}
                                                >
                                                -
                                                </button>
                                                <span className={styles.optionCounterNumber}>
                                                {options.adult}
                                                </span>
                                                <button
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("adult", "i")}
                                                >
                                                +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.optionItem}>
                                            <div className='flex flex-col'>
                                                <span className={styles.optionText}>Children</span>
                                                <span className={styles.optionBellowText}>Ages 2-12</span>
                                            </div>
                                            <div className={styles.optionCounter}>
                                                <button
                                                disabled={options.children <= 0}
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("children", "d")}
                                                >
                                                -
                                                </button>
                                                <span className={styles.optionCounterNumber}>
                                                {options.children}
                                                </span>
                                                <button
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("children", "i")}
                                                >
                                                +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.optionItem}>
                                            <div className='flex flex-col'>
                                                <span className={styles.optionText}>Infants</span>
                                                <span className={styles.optionBellowText}>Under 2</span>
                                            </div>
                                            <div className={styles.optionCounter}>
                                                <button
                                                disabled={options.infants <= 0}
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("infants", "d")}
                                                >
                                                -
                                                </button>
                                                <span className={styles.optionCounterNumber}>
                                                {options.infants}
                                                </span>
                                                <button
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("infants", "i")}
                                                >
                                                +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.optionItem}>
                                            <div className='flex flex-col'>
                                                <span className={styles.optionText}>Pets</span>
                                                <span className={styles.optionBellowText}>Bringing a service animal?</span>
                                            </div>
                                            <div className={styles.optionCounter}>
                                                <button
                                                disabled={options.pets <= 0}
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("pets", "d")}
                                                >
                                                -
                                                </button>
                                                <span className={styles.optionCounterNumber}>
                                                {options.pets}
                                                </span>
                                                <button
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("pets", "i")}
                                                >
                                                +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                }
                
                {
                    dropdown && <div className={styles.dropDown}>
                        <ul>
                            <li onClick={() => setAuthModal(!authModal)}>Signup</li>
                            <li onClick={() => setAuthModal(!authModal)}>Login</li>
                        </ul>
                        <p className={styles.dropDownHr}></p>
                        <ul>
                            <li>Host Your Home</li>
                            <li>Host an experience</li>
                            <li>Help</li>
                        </ul>
                        
                    </div>
                }
                {
                    filterOpen && <Modal
                    // style={{padding:0}}
                    centered
                    open={filterOpen}
                    width={870}
                    closable={false}
                    footer={false}
                    className={{borderRadius:"30px"}}
                    bodyStyle={{margin:"0", border:"none", padding:0  }}
                >
                    <div>
                        <div className='border-b-[1px]'>
                            <div className='flex items-center px-5 py-5'>
                                <RiCloseFill onClick={() => setFilterOpen(false)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                                <p className='m-0 mx-auto font-bold text-lg '>Filters</p>
                            </div>
                        </div>
                        <div className='px-5 mt-10'>
                            <p className={styles.pHeading}>Price range</p>
                            <div className={styles.divider}>
                                <p className=''></p>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-5 mt-[25px]'>
                                <div>
                                    <h1 className={styles.heading}>Booking Protection Guarantee</h1>
                                    <p className={styles.pHeading}>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
                                </div>
                                <div>
                                    <h1 className={styles.heading}>Check-In Guarantee</h1>
                                    <p className={styles.pHeading}>If you can’t check into your home and the Host cannot resolve the issue, 
                                        we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.
                                    </p>
                                </div>
                                <div>
                                    <h1 className={styles.heading}>Get-What-You-Booked Guarantee</h1>
                                    <p className={styles.pHeading}>If at any time during your stay you find your listing isn't as advertised—for example, 
                                        the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed—you'll have 
                                        three days to report it and we’ll find you a similar or better home, or we’ll refund you.
                                    </p>
                                </div>
                                <div>
                                    <h1 className={styles.heading}>24-hour Safety Line</h1>
                                    <p className={styles.pHeading}>If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </Modal>
                }
                {
                    authModal && <Modal
                    centered
                    style ={{borderRadius:"15px",overflow:"auto"}}
                    open={authModal}
                    width={570}
                    closable={false}
                    footer={false}
                    className={{borderRadius:"30px"}}
                    bodyStyle={{margin:"0", border:"none", padding:0  }}
                >
                    <div>
                        <div className='border-b-2'>
                            <div className='flex items-center px-5 py-5'>
                                <RiCloseFill onClick={() => setAuthModal(false)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                                <p className='m-0 mx-auto font-bold text-lg '>Log in or sign up</p>
                            </div>
                        </div>
                        <AuthModal/>
                        
                    </div>
                    </Modal>
                }
            </div>
        </div>
    );
};

export default Navbar;