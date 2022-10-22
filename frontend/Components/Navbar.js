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


const Navbar = () => {
    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
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
        room: 0,
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
        <div className='border py-4 '>
            <div className='max-w-7xl mx-auto px-2 relative'>
                <div className='flex items-center justify-between text-black '>
                    <div className='flex justify-start'>
                        <Image
                            className={styles.logo}
                            src={logo}
                            alt="Picture of the author"
                        />
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
                            <span onClick={()=>setCartOpen(true)} >
                                <FaUserCircle className=' text-3xl ' />
                            </span>
                        </div>
                        
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
                                { (format(date[0].startDate) !== format(new Date())) 
                                    ? 
                                    <p className={styles.optionFooter}>Add dates</p> 
                                    :
                                    <p className={styles.optionFooter}>
                                        {`${format(date[0].startDate, "MM/dd/yyyy")}`}
                                    </p>
                                }
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
                                        // editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        // showSelectionPreview={true}
                                        // moveRangeOnFirstSelection={false}
                                        months={2}
                                        ranges={date}
                                        direction="horizontal"
                                        className={styles.date}
                                        // minDate={new Date()}
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
                                                disabled={options.room <= 0}
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("infants", "d")}
                                                >
                                                -
                                                </button>
                                                <span className={styles.optionCounterNumber}>
                                                {options.room}
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
                                                disabled={options.room <= 0}
                                                className={styles.optionCounterButton}
                                                onClick={() => handleOption("pets", "d")}
                                                >
                                                -
                                                </button>
                                                <span className={styles.optionCounterNumber}>
                                                {options.room}
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
                            <li><Link href="/signup">Signup</Link> </li>
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