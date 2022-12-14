import { IoIosArrowUp } from "react-icons/io";
// import style from '../styles/checkOut.module.css'
import style from "../../styles/checkOut.module.css"
import { BiChevronDown } from 'react-icons/bi';
import { FaFacebookF, FaGoogle, FaLock } from 'react-icons/fa';
import { GrApple } from 'react-icons/gr';
import { TbMail } from 'react-icons/tb';
import { RiArrowDownSLine, RiCloseFill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import Footer from "../../Components/Footer";
import { Modal } from 'antd';
import Country from "../../language.json";
import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'
import { useStripe, useElements, 
    CardNumberElement, CardExpiryElement, 
    CardCvcElement } from '@stripe/react-stripe-js'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { FaAirbnb, FaStar } from 'react-icons/fa';

const options = {
    style: {
        base: {
            fontSize: '14px'
        },
        invalid: {
            color: '#C13515'
        }
    }
}

const checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [countryName, setCountryName] = useState("");
    const [paymentOptions, setPaymentOptions] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [address, setAddress] = useState('')
    const router = useRouter()
    const { id } = router.query;
    const dispatch = useDispatch();
    const {  loading, product, error } = useSelector(state => state.productDetails);
    
    useEffect(() => {
        dispatch(getProductDetails(id));
        if (error) {
            dispatch(clearErrors())
        }
    }, [dispatch, error]);
    const handleChange = (e)=>{
        setAddress( (prev)=> ({...prev, [e.target.name]: e.target.value}))
    }
    const submitHandler = async (e) => {
        const card = {
            amount : 90
        };
        
        let res;
        try{
            res = await axios.post('http://localhost:5001/api/v1/payment/process', card)
            const clientSecret = res.data.client_secret;
            console.log(clientSecret);
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                        card: elements.getElement(CardNumberElement)
                    }
            });
        }
        catch{

        }
        /* e.preventDefault();

        document.querySelector('#pay_btn').disabled = true;

        let res;
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            // res = await axios.post('/api/v1/payment/process', paymentData, config)

            const clientSecret = res.data.client_secret;

            setSecret(clientSecret);

            if (!stripe || !elements) {
                return;
            }

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email
                    }
                }
            });

            if (result.error) {
                alert.error(result.error.message);
                document.querySelector('#pay_btn').disabled = false;
            } else {

                // The payment is processed or not
                if (result.paymentIntent.status === 'succeeded') {

                    order.paymentInfo = {
                        id: result.paymentIntent.id,
                        status: result.paymentIntent.status
                    }
                    // dispatch(createOrder(order))
                    // history.push('/success')
                } else {
                    alert.error('There is some issue while payment processing')
                }
            }
        } catch (error) {
            alert.error(error.response.data.message)
        } */
    }
    
  return (
    <ElementsConsumer>
        {({elements, stripe}) => (
            <div className=" max-w-7xl mx-auto px-10  mt-10">
                <div className="flex  gap-10">
                    <div className='w-1/2'>
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
                        <section className="payment option mb-6">
                            <h1 className="text-xl">Pay With</h1>
                            <div className="flex">
                                <img className="w-7" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1667590505/visa_efswl7.png" alt=""/>
                                <img className="w-4 mx-1" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1667590505/icons8-mastercard-logo-48_nwlfcz.png" alt=""/>
                                <img className="w-7" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1667590505/google-pay_bcgmx5.png" alt=""/>
                            </div>
                            <div className="grid col-span-1 gap-5">
                                <div className="mt-2">
                                    <div onClick={()=>setPaymentOptions(!paymentOptions)} style={{border:"1px solid #B0B0B0", borderRadius:"8px", height: "52px"}} className="flex justify-between items-center gap-2 cursor-pointer px-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-10 opacity-20" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1667591354/credit-card-payment_rhxbzn.png" alt=""/>
                                            <h1 className="m-0 text-xl">Credit or debit card</h1>
                                        </div>
                                        <RiArrowDownSLine className="text-2xl"/>
                                    </div>
                                    {
                                        paymentOptions && 
                                            <div className="w-full">
                                                <ul className={style.paymentOption}>
                                                    <li className="flex items-center gap-2">
                                                        <img className="w-10 opacity-20" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1667591354/credit-card-payment_rhxbzn.png" alt=""/>
                                                        <h1 className="m-0 text-xl">Credit or debit card</h1>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <img className="w-10 mt-1" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1667590505/google-pay_bcgmx5.png" alt=""/>
                                                        <h1 className="m-0 text-xl">Google Pay</h1>
                                                    </li>
                                                </ul>
                                            </div>
                                    }
                                </div>
                                <section className="stripe">
                                    {/* <Elements stripe={stripePromise} elements > */}
                                        <div className="" style={{border:"1px solid #B0B0B0", borderRadius:"8px"}}>
                                            <div className={style.cardBox} style={{borderBottom:"1px solid #B0B0B0"}}>
                                                <CardNumberElement
                                                    type="text"
                                                    className={style.cardInput}
                                                    options={options}
                                                />
                                                <label htmlFor="card_num_field" className={style.cardLabel}>Card number <FaLock/></label>
                                            </div>
                                            <div className="flex">
                                                <div className={style.cardBox}>
                                                    <CardExpiryElement
                                                        type="text"
                                                        className={style.cardInput}
                                                        options={options }
                                                    />
                                                    <label htmlFor="card_exp_field" className={style.cardLabel}>Expiration</label>
                                                </div>
                                                <div className={style.cardBox} style={{borderLeft:"1px solid #B0B0B0"}}>
                                                    <CardCvcElement
                                                        type="text"
                                                        className={style.cardInput}
                                                        options={options}
                                                    />
                                                    <label htmlFor="card_cvc_field" className={style.cardLabel}>cvc</label>
                                                </div>
                                            </div>
                                        </div>
                                    {/* </Elements> */}
                                </section>
                                <h1 className="text-xl m-0 ">Billing Address</h1>
                                <div className={style.addressContainer}  >
                                    <div style={{borderBottom:"1px solid #B0B0B0"}} className={style.formBox}>
                                        <input name='address' onChange={handleChange} className={style.formInput} type="text"  />
                                        <label  for="" className={style.formLabel}>Street Address</label>
                                    </div>
                                    <div style={{borderBottom:"1px solid #B0B0B0"}} className={style.formBox}>
                                        <input name='aptNumber' onChange={handleChange} className={style.formInput}  type="text"  />
                                        <label for="" className={style.formLabel}>Apt or suite number</label>
                                    </div>
                                    <div style={{borderBottom:"1px solid #B0B0B0"}} className={style.formBox}>
                                        <input name='city' onChange={handleChange} className={style.formInput}   type="text"  />
                                        <label for="" className={style.formLabel}>City</label>
                                    </div>
                                    <div className="flex ">
                                        <div className={style.formBox}>
                                            <input onChange={handleChange} name='state' className={style.formInput}   type="text"  />
                                            <label  for="" className={style.formLabel}>State</label>
                                        </div>
                                        <div style={{borderLeft:"1px solid #B0B0B0"}} className={style.formBox}>
                                            <input onChange={handleChange} name='zipCode' className={style.formInput}  type="text"  />
                                            <label  for="" className={style.formLabel}>ZIP Code</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.countryName} onClick={()=>setOpenModal(true)}>
                                    <div >
                                        <p className=''>Country/Region</p>
                                        <h2 className='m-0'>{countryName}</h2>
                                    </div>
                                    <FiChevronDown className='text-2xl' />
                                </div>
                            </div>
                            <p className="my-5 text-base font-bold underline">Enter A coupon</p>
                            <div className={style.checkOutDivider}>
                                <p></p>
                            </div>
                            <section className="cancellationPolicy">
                                <h1 className="m-0 my-6 text-xl font-semibold">Cancellation Policy</h1>
                                <p className="m-0 text-base"><span className="font-bold">Free cancellation for 48 hours.</span> 
                                Cancel before Dec 24 for a partial refund. <span className="font-bold underline">Learn more</span></p>

                                <div className={style.checkOutDivider}>
                                    <p></p>
                                </div>

                                <p className="m-0 text-xs mb-6">By selecting the button below, I agree to the Host's House Rules, Airbnb's Rebooking and Refund Policy, and that Airbnb can charge my payment method if I???m responsible for damage. I agree to pay the total amount shown if the Host accepts my booking request.</p>
                            </section>
                            <button onClick={submitHandler} className={style.confirmBtn}>Confirm and pay</button>
                        </section>

                        
                    </div>
                    <div className='w-1/2'>
                        <div className='border p-6 sticky top-32 rounded-lg' >
                            <div className="flex gap-5">
                                <img className="rounded-lg w-1/2" src={product?.img[0]} alt="" />
                                <div className="w-1/2 flex flex-col justify-between">
                                    <div>
                                        <p style={{color:"#696969"}} className="m-0 text-xs">Dome</p>
                                        <p className="m-0 mt-[-5px] text-[16px]">{product?.name}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="flex items-center gap-1"><FaStar/>{product?.rating}</span>
                                        <span>(17)</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cardDivider}>
                                <p></p>
                            </div>
                            <h2 style={{color:"#696969"}} className='m-0 my-6 flex items-center gap-2'>Your booking is protected by <img className="w-20" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" /></h2>
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
                                    <span className="text-[#54B157]">{product?.price}</span>
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
                <Footer/>

                {
                    openModal && 
                    <Modal
                        visible={openModal}
                        centered
                        style ={{borderRadius:"15px", overflow:"auto" }}
                        width={570}
                        closable={false}
                        footer={false}
                        className={{borderRadius:"30px"}}
                        bodyStyle={{margin:"0", border:"none", padding:0, overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}
                    >
                        <div className={style.countryNameContainer}>
                            <div className="absolute sticky top-0 bg-white" style ={{borderBottom:"1px solid #EAEAEA"}}>
                                <div className='flex items-center px-4 py-5'>
                                    <RiCloseFill onClick={() => setOpenModal(false)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                                    <p className='m-0 mx-auto font-bold text-lg '>Country / Region</p>
                                </div>
                            </div>
                            <div className=' px-5 py-5'>
                                <ul>
                                    {
                                        Country.map((item)=> <div key={item.id} 
                                        style ={{borderBottom:"1px solid #EAEAEA"}}
                                        onClick={() => setCountryName(item.name)} 
                                        className="flex items-center cursor-pointer justify-between">
                                            <li >{item.name}</li>
                                            {
                                                countryName=== item.name ?
                                                <TiTick className="text-2xl" /> : ""
                                            }
                                        </div>)
                                    }
                                </ul>
                            </div>                          
                        </div>
                    </Modal>
                }
            </div>
        )}
    </ElementsConsumer>
  )
}

export default checkout