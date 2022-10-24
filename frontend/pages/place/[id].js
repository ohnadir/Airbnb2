import style from '../../styles/book.module.css';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { BiBed } from 'react-icons/bi';
import { BsWifi, BsStar, BsClockFill, BsStars } from 'react-icons/bs';
import { MdMonitor, MdVerifiedUser } from 'react-icons/md';
import { TbPool, TbWorld } from 'react-icons/tb';
import { FaAirbnb, FaStar } from 'react-icons/fa';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';
import MetaData from '../../Components/Meta';
import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { DateRange, DateRangePicker } from "react-date-range";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { Spin } from 'antd';

export default function Book() {
    const router = useRouter()
    const { id } = router.query;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [service, setService] = useState(false);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const {  loading, product, error } = useSelector(state => state.productDetails);
    
    useEffect(() => {
        dispatch(getProductDetails(id));
        if (error) {
            dispatch(clearErrors())
        }
    }, [dispatch, error]);
    const name = product?.name?.split(',')[1];
    const name2 = product?.name?.split(',')[0];
    const subTotal = parseInt(product.price) * parseInt(2);
    const total = parseInt(subTotal) + parseInt(24);
    
    return (
        <>
            { 
                loading ? <Spin className={style.spinContainer} /> :
            
                <div className="max-w-7xl mx-auto px-10 mt-10">
                    <MetaData title={'Book'} />

                    <div>
                        <div>
                            <h1 className={style.headerName}>{name2}</h1>
                            <p className="underline cursor-pointer text-base">{name}</p>
                        </div>
                        <div className={style.imageContainer} id='imageContainer'>
                            <div className={style.bigSize}>
                                {
                                    product?.img ? <img src={product?.img[0]}  alt=""/> : ""
                                }
                            </div>
                            <div className={style.image}>
                                <div>
                                    {
                                        product?.img ? <img className="" src={product?.img[1]}  alt=""/> : ""
                                    }
                                </div>
                                <div>
                                    {
                                        product?.img ? <img className={style.topCorner} src={product?.img[2]}  alt=""/> : ""
                                    }
                                </div>
                                <div>
                                    {
                                        product?.img ? <img className="" src={product?.img[3]}  alt=""/> : ""
                                    }
                                </div>
                                <div>
                                    {
                                        product?.img ? <img className={style.bottomCorner} src={product?.img[4]}  alt=""/> : ""
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between mt-20'>
                            <div className='w-full md:w-3/5'>
                                <div className='flex justify-between items-center '>
                                    <div className='flex flex-col'>
                                        <p className='text-2xl font-sans font-bold m-0'>Dome hosted by LookBook</p>
                                        <div className='text-[16px]'>
                                            <ul className={style.seatOption}>
                                                <p className='m-0'>3 guests</p>
                                                <li>1 bedroom</li>
                                                <li>1 bed</li>
                                                <li>1 bath</li>
                                            </ul>
                                        </div>
                                        {/* <span >6 guests1 bedroom1 bed1 bath</span> */}
                                    </div>
                                    <div>
                                        <img className='w-12' src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240" alt="" />
                                    </div>
                                </div>
                                <div className={style.simpleDivider}>
                                    <p></p>
                                </div>
                                <div className='grid grid-cols-1 gap-4 mt-10'>
                                    <div className='flex gap-3'>
                                        <AiOutlineStar className='text-3xl'/>
                                        <div className='-mt-1'>
                                            <p className={style.diveHead}>Dive right in</p>
                                            <p className={style.diveHeader}>This is one of the few places in the area with a pool.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <AiOutlineStar className='text-3xl'/>
                                        <div className='-mt-1'>
                                            <p className={style.diveHead}>Experienced host</p>
                                            <p className={style.diveHeader}>LookBook has 821 reviews for other places.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.simpleDivider}>
                                    <p></p>
                                </div>
                                <div className='mb-8'>
                                    <img className='w-28 my-6' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" />
                                    <p className='text-base  leading-6'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                                    <p className='underline font-semibold cursor-pointer' onClick={() => setOpen(true)}>Learn more</p>
                                </div>
                                <div className={style.simpleDivider}>
                                    <p></p>
                                </div>
                                <p className='my-8 text-[17px] leading-6'>
                                    ALL INCLUSIVE RESORT AWARD WINNER
                                    Lily Beach is proud to have once again won the prestigious All Inclusive Resort Award this year.
                                </p>
                                <div className={style.simpleDivider}>
                                    <p></p>
                                </div>
                                <div className='my-10'>
                                    <h2 className='text-2xl font-bold font-sans'>Where you'll sleep</h2>
                                    
                                    <div className={style.roomType}>
                                        <BiBed className='text-3xl mb-3' />
                                        <div className='flex flex-col'>
                                            <span className='text-black text-lg font-semibold'>Bedroom</span>
                                            <span>1 double bed</span>
                                        </div>
                                    </div> 
                                </div> 
                                <div className={style.simpleDivider}>
                                    <p></p>
                                </div>
                                <div className='my-10'>
                                    <h2 className='text-2xl font-bold font-sans'>What this place offers</h2>
                                    <div className='grid grid-cols-1 gap-4'>
                                        <div className={style.serviceContainer}>
                                            <BsWifi className={style.serviceIcon}/>
                                            <span className={style.serviceName}>Wifi</span>
                                        </div>
                                        <div className={style.serviceContainer}>
                                            <TbPool className={style.serviceIcon}/>
                                            <span className={style.serviceName}>Pool</span>
                                        </div>
                                        <div className={style.serviceContainer}>
                                            <MdMonitor className={style.serviceIcon}/>
                                            <span className={style.serviceName}>TV</span>
                                        </div>
                                        <div className={style.serviceContainer}>
                                            <MdMonitor className={style.serviceIcon}/>
                                            <span className={style.serviceName}>Air conditioning</span>
                                        </div>
                                        <div className={style.serviceContainer}>
                                            <img className='w-6' src="https://www.shareicon.net/data/128x128/2016/06/06/776638_technology_512x512.png" alt=""/>
                                            <span className={style.serviceName}>Hair dryer</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setService(true)} type="" className='border px-8 text-base font-bold py-2 mt-10 border-black rounded-md '>Show all 15 amenities</button>
                                </div>
                                <div className={style.simpleDivider}>
                                    <p></p>
                                </div>
                                <div className='mt-10'>
                                    <div className='mb-4'>
                                        <h2 className='p-0 m-0 text-xl font-bold font-sans'>5 nights in MV</h2>
                                        <h3 style={{"color": "#717171"}} className='p-0 m-0 '>Oct 14, 2022 - Oct 19, 2022</h3>
                                    </div>

                                    <div>
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setState([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={state}
                                        />
                                    </div>
                                    
                                </div>
                                    
                            </div>
                            <div className='w-1/3 hidden md:block' id='reserveCard'>
                                <div className={style.reserveCard}>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-2xl font-semibold'>${product?.price} AUD</span>
                                        <span style={{color:" #979797"}} className='mt-1 text-lg'>night</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-3">
                                        <FaStar className=""/>
                                        <span className=" font-semibold">{product?.rating}</span>
                                        <div style={{color:" #979797"}} className=' text-md'>
                                            review 
                                        </div>
                                    </div>
                                    <div className={style.reserveOption}>
                                        <div style={{border:"1px solid #b0b0b0"}} className=' rounded-xl'>
                                            <div className='flex justify-between'>
                                                <div className={style.checkIn }>
                                                    <p className={style.checkHead}>CHECK-IN</p>
                                                    <p className={style.checkFooter}>Add date</p>
                                                </div>
                                                <div className={style.checkOut}>
                                                    <p className={style.checkHead}>CHECKOUT</p>
                                                    <p className={style.checkFooter}>Add date</p>
                                                </div>
                                            </div>
                                            <div className={style.guestContainer}>
                                                <div className={style.guest}>
                                                    <p className={style.checkHead}>GUESTS</p>
                                                    <p className={style.checkFooter}>1 guest</p>
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
                                        <div className='flex items-center justify-between  mt-3'>
                                            <span className='underline '>${product.price} AUD x 2 nights</span>
                                            <span>{subTotal} AUD</span>
                                        </div>
                                        <div className='my-1 flex items-center justify-between font-[400]'>
                                            <span className='underline '>Service fee</span>
                                            <span>$24 AUD</span>
                                        </div>
                                        <div className={style.divider}>
                                            <p></p>
                                        </div>
                                        <div className='flex items-center justify-between font-semibold mt-4'>
                                            <span>Total before taxes</span>
                                            <span>${total} AUD</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={style.simpleDivider}>
                            <p></p>
                        </div>
                        <section className='reviewSection my-10'>
                            <h2  className='text-2xl font-bold'>No reviews (yet)</h2>
                            <div className='flex items-center justify-between'>
                                <div className='flex  gap-2'>
                                    <AiOutlineStar className='text-4xl' />
                                    <p className='m-0 text-base'>
                                        This host has 821 reviews for <br/> other places to stay. <span className='font-bold underline'>Show other reviews</span>
                                    </p>
                                </div>
                                <div>
                                    <div className='flex  gap-2'>
                                        <TbWorld className='text-4xl' />
                                        <p className='m-0 text-base'>
                                            We’re here to help your trip go smoothly. <br/> Every reservation is  covered by <br/> <span className='font-bold underline'> Airbnb’s Guest Refund Policy.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className={style.simpleDivider}>
                            <p></p>
                        </div>
                        <section className='mapSection my-10'>
                            <h2 className='text-2xl text-[#222222] font-bold font-sans'>Where you’ll be</h2>
                            <p>Maldives</p>
                            <div className='map'>

                            </div>
                        </section>
                        <div className={style.simpleDivider}>
                            <p></p>
                        </div>
                        <section className='hostedSection my-10'>
                            <div className='flex items-center gap-5 mb-2'>
                                <img className='w-16' src='https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240' />
                                <div>
                                    <h2 className='text-2xl text-[#222222] font-bold font-sans mb-2 m-0'>Hosted by LookBook</h2>
                                    <span className='text-base'>Joined in October 2015</span>
                                </div>
                            </div>
                            <div className={style.hostedContainer}>
                                <div className='w-full'>
                                    <div className='flex gap-6 items-center mb-4'>
                                        <div className='flex items-center gap-3 text-[17px]'>
                                            <BsStar/>
                                            <span>821 Reviews</span>
                                        </div>
                                        <div className='flex items-center gap-3 text-[17px]'>
                                            <MdVerifiedUser/>
                                            <span>Identity verified</span>
                                        </div>
                                    </div>
                                    <p className='text-base  m-0'>We are a fully independent and dynamic  specialist online holiday accommodation  provider world-wide company. Hotels and  properties are in cities and sun & beach destinations, ma… <span className='font-bold underline'>read more</span> </p>
                                </div>
                                <div className='w-full md:ml-32'>
                                    <div className=''>
                                        <p className='m-0 text-base '>Languages: English, Türkçe</p>
                                        <p className='m-0 text-base '>Response rate: 83%</p>
                                        <p className='m-0 text-base '>Response time: within a day</p>
                                    </div>
                                    <button style={{"border" : "1px solid #222222"}} className='my-5 py-2 px-6 text-[16px] font-bold rounded-lg' type="">Contact Host</button>
                                    <div className='flex items-center gap-3'>
                                        <FaAirbnb className={style.airBnb } />
                                        <p className='m-0 text-sm'>To protect your payment, never transfer <br/>  money or communicate outside of the Airbnb <br/>  website or app.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className={style.simpleDivider}>
                            <p></p>
                        </div>
                        <section className='hostedSection my-10'>
                            <h2 className='text-2xl font-bold font-sans m-0'>Things to know</h2>
                            <div className='flex justify-between mt-3'>
                                <div className='w-1/3'>
                                    <h2 className='mb-2 text-lg font-bold  m-0'>House rules</h2>
                                    <BsClockFill className='text-lg'/>
                                </div>
                                <div className='w-1/3'>
                                    <h2 className='mb-2 text-lg  font-bold m-0'>Health & safety</h2>
                                    <span className='flex  gap-3 text-[15px] text-base mb-1'><BsStars className='text-xl'/>  Airbnb's COVID-19 safety <br/> practices apply</span>
                                    <span className='flex items-center gap-3 text-base mb-1'><RiAlarmWarningFill className='text-xl'/> Carbon monoxide alarm</span> 
                                    <span className='flex items-center gap-3 text-base mb-1'> <RiAlarmWarningFill className='text-xl'/> Smoke alarm</span> 
                                    <h3 className='underline font-bold flex items-center text-base'>Show more <BiChevronRight className='text-xl mt-1'/></h3>
                                </div>
                                <div className='w-1/3'>
                                    <h2 className='mb-2 text-lg  font-bold  m-0'>Cancellation policy</h2>
                                    <p className='text-base'>Cancel before Oct 13 for a partial refund.</p>
                                    <p className='text-base'>Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
                                    <p className='underline font-bold flex items-center text-base'>Show more <BiChevronRight className='text-xl mt-1'/></p>
                                </div>
                            </div>
                        </section>
                        <div className={style.simpleDivider}>
                            <p></p>
                        </div>
                        <section className='helpSection grid grid-cols-1 gap-6 mt-10'>
                            <div>
                                <h2 className='text-2xl font-bold  mb-2'>Support</h2>
                                <div className='grid md:grid-cols-3 text-base gap-2'>
                                    <p className='m-0'>Help Center</p>
                                    <p className='m-0'>AirCover</p>
                                    <p className='m-0'>Safety information</p>
                                    <p className='m-0'>Supporting people with disabilities</p>
                                    <p className='m-0'>Cancellation options</p>
                                    <p className='m-0'>Our COVID-19 Response</p>
                                    <p className='m-0'>Report a neighborhood concern</p>
                                </div>
                            </div>
                            <div className={style.simpleDivider}>
                                <p></p>
                            </div>
                            <div>
                                <h2 className='text-2xl  font-bold mb-2'>Community</h2>
                                <div className='grid md:grid-cols-3 text-base gap-2'>
                                    <p className='m-0'>Airbnb.org: disaster relief housing</p>
                                    <p className='m-0'>Support Afghan refugees</p>
                                    <p className='m-0'>Combating discrimination</p>
                                </div>
                            </div>
                            <div className={style.simpleDivider}>
                                <p></p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold  mb-2'>Hosting</h2>
                                <div className='grid md:grid-cols-3 text-base gap-2'>
                                    <p className='m-0'>Try hosting</p>
                                    <p className='m-0'>AirCover for Hosts</p>
                                    <p className='m-0'>Explore hosting resources</p>
                                    <p className='m-0'>Visit our community forum</p>
                                    <p className='m-0'>How to host responsibly</p>
                                </div>
                            </div>
                            <div className={style.simpleDivider}>
                                <p></p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold  mb-2'>Airbnb</h2>
                                <div className='grid md:grid-cols-3 text-base gap-2'>
                                    <p className='m-0'>Newsroom</p>
                                    <p className='m-0'>Learn about new features</p>
                                    <p className='m-0'>Letter from our founders</p>
                                    <p className='m-0'>Careers</p>
                                    <p className='m-0'>Investors</p>
                                    <p className='m-0'>Gift cards</p>
                                </div>
                            </div>
                            <div className={style.simpleDivider}>
                                <p></p>
                            </div>
                        </section>
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
                    {
                        service && <Modal
                        // style={{padding:0}}
                        centered
                        open={service}
                        width={870}
                        closable={false}
                        footer={false}
                        className={{borderRadius:"30px"}}
                        // style={{borderRadius:"30px"}}
                        bodyStyle={{margin:"0", border:"none"  }}
                    >
                        <div>
                            <RiCloseFill onClick={() => setService(false)} className='w-[30px] h-[30px]  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
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
            }
        </>

    )
    
}