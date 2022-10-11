import style from '../styles/book.module.css';
// import { IoChevronDownSharp } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';
import { IoClose } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import MetaData from '../Component/Meta';
import { useState } from 'react';
import { Button, Modal } from 'antd';
export default function Book() {
    const [open, setOpen] = useState(false);

    return (
      <div className="max-w-7xl mx-auto px-2 mt-10">
        <MetaData title={'Address'} />
        <div>
            <div>
                <h1 className={style.headerName}>Adaaran Club Rannalhi, Maldives, Silver All Inclu.</h1>
                <p className="underline cursor-pointer text-[15px]">Maldives</p>
            </div>
            <div className={style.imageContainer} id='imageContainer'>
                <div className="max-h-full w-[50%]">
                    <img className="" src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="grid grid-cols-2 gap-[20px] w-[50%] max-h-full">
                    <div>
                        <img className="" src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                    <div>
                        <img className="" src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                    <div>
                        <img className="" src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                    <div>
                        <img className="" src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-20'>
                <div className='w-[60%]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <span id='spanTag'>Dome hosted by LookBook</span>
                            <span>6 guests1 bedroom1 bed1 bath</span>
                        </div>
                        <div>
                            <img className='w-[50px]' src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240" alt="" />
                        </div>
                    </div>
                    <div className={style.divider}>
                        <p></p>
                    </div>
                    <div className='grid grid-cols-1 gap-4 my-10'>
                        <div className='flex gap-1'>
                            <AiOutlineStar className='text-xl'/>
                            <div className='mt-[-4px]'>
                                <p className='m-0 p-0'>Dive right in</p>
                                <p className='m-0 p-0 text-[]'>This is one of the few places in the area with a pool.</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <AiOutlineStar className='text-xl'/>
                            <div className='mt-[-4px]'>
                                <p className='m-0 p-0'>Experienced host</p>
                                <p className='m-0 p-0 text-[]'>LookBook has 821 reviews for other places.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.divider}>
                        <p></p>
                    </div>
                    <div>
                        <img className='w-[120px] my-6' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" />
                        <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                        <p className='underline cursor-pointer' onClick={() => setOpen(true)}>Learn more</p>
                    </div>
                </div>
                <div className='w-[30%]' id='reserveCard'>
                    <div className={style.reserveCard}>
                        <div className='flex items-center gap-1 mb-3'>
                            <span>$943 AUD</span>
                            <span>night</span>
                        </div>
                        <div className={style.reserveOption}>
                            <div className='border border-[#b0b0b0] rounded-[10px]'>
                                <div className='flex justify-between'>
                                    <div className={style.checkIn }>
                                        <p className={style}>CHECK-IN</p>
                                        <p className={style}>Add date</p>
                                    </div>
                                    <div className={style.checkOut}>
                                        <p className={style}>CHECKOUT</p>
                                        <p className={style}>Add date</p>
                                    </div>
                                </div>
                                <div className={style.guestContainer}>
                                    <div className={style.guest}>
                                        <p className={style}>GUESTS</p>
                                        <p className={style}>1 guest</p>
                                    </div>
                                    {/* <span><IoChevronDownSharp/></span> */}
                                    {/* <IoChevronDownSharp/> */}
                                    <IoIosArrowUp/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className={style.reserveBtn} type="">Check availability</button>
                            <button className={style.reserveBtn} type="">Reserve</button>
                        </div>
                        <div>
                            <h1 className='mt-2 text-center'>You won't be charged yet</h1>
                            <div className='flex items-center justify-between font-[400] text-[16px] '>
                                <span>{`{$87} AUD x {2 nights}`}</span>
                                <span>$173 AUD</span>
                            </div>
                            <div className='my-1 flex items-center justify-between font-[400] text-[16px]'>
                                <span>Service fee</span>
                                <span>$24 AUD</span>
                            </div>
                            <div className={style.divider}>
                                <p></p>
                            </div>
                            <div className='flex items-center justify-between font-semibold text-[16px]'>
                                <span>Total before taxes</span>
                                <span>$197 AUD</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        {
            open && <Modal
            // style={{padding:0}}
            centered
            open={open}
            width={870}
            closable={false}
            footer={false}
            className={{borderRadius:"30px"}}
            // style={{borderRadius:"30px"}}
            bodyStyle={{margin:"0", border:"none"  }}
          >
            <div>
                <RiCloseFill onClick={() => setOpen(false)} className='w-[30px] h-[30px]  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                <img className='w-[140px] my-6' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" />
                <p className={style.pHeading}>AirCover is comprehensive protection included for free with every booking.</p>
                <div className={style.divider}>
                    <p className=''></p>
                </div>
                <div className='grid lg:grid-cols-2 gap-5 mt-[25px]'>
                    <div>
                        <h1 className={style.heading}>Booking Protection Guarantee</h1>
                        <p className={style.pHeading}>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
                    </div>
                    <div>
                        <h1 className={style.heading}>Check-In Guarantee</h1>
                        <p className={style.pHeading}>If you can’t check into your home and the Host cannot resolve the issue, 
                            we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.
                        </p>
                    </div>
                    <div>
                        <h1 className={style.heading}>Get-What-You-Booked Guarantee</h1>
                        <p className={style.pHeading}>If at any time during your stay you find your listing isn't as advertised—for example, 
                            the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed—you'll have 
                            three days to report it and we’ll find you a similar or better home, or we’ll refund you.
                        </p>
                    </div>
                    <div>
                        <h1 className={style.heading}>24-hour Safety Line</h1>
                        <p className={style.pHeading}>If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.</p>
                    </div>
                </div>
                <p className={style.pHeading}>Find complete details on how AirCover protects your booking in our <span className='font-bold text-black cursor-pointer underline'>Help Center</span></p>
            </div>
          </Modal>
        }
      </div>
    )
}