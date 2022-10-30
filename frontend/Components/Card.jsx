import { BiChevronRight, BiChevronLeft, BiSearch, BiHeart, BiUserCircle } from "react-icons/bi";
import Slider from "react-slick";
import style from '../styles/Home.module.css'
import { FaStar } from 'react-icons/fa';
import { BsFillMapFill } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import palace from './place.json';
import { message } from 'antd';
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { getProducts, clearErrors } from '../actions/productActions'
import { Spin } from 'antd';
import { useRouter } from 'next/router'

export default function Card() {
    const router = useRouter()
    const [page, setPage] = useState('');
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector(state => state.products);
    const ArrowLeft = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 0 ? "hidden" : "visible"}}
            className={style.prev}>
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 4 ? "hidden" : "visible"}}
            className={style.next}>
            <BiChevronRight/>
        </button>
    );

    const settings = {
        arrows: true,
        dots: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        appendDots: dots => (
            <div
              style={{position:"absolute", bottom:"8px", }}>
              <ul className={style.sideDots} style={{ margin: "0px" }}> <span className={style.dots}>{dots}</span> </ul>
            </div>
          )
    };
    const handleWish=()=>{
        message.info("Added on Wish list");
    }
    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])
    const controlNavbar = () => {
        if (window.scrollY > 1280) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);
    const icon = [
        {id: 1, name: "Search", icon: <BiSearch /> },
        { id: 2,  name: "Wishlists", icon: <BiHeart /> },
        { id: 3, name: "Log in", icon: <BiUserCircle />}
    ]

    
  return (
    <>
    {
        loading ? <Spin className={style.spinContainer} /> 
        :
        
        <div className="container mx-auto px-4 mt-8 mb-8">
            <section style={{display: show === false ? "block" : "none"}}>
                <div className={style.locationTiger}>
                    <div className={style.location} >Show map <BsFillMapFill /></div>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:grid-cols-2">
                {
                    products?.data?.map((item)=> 
                        <div onClick={() => router.push(`place/${item.id}`)} key={item.id} className={style.cardItem}>
                            <div className="relative">
                                <div style={{"zIndex":"1"}} className="absolute  text-white transition-all hover:text-[#717175] right-2 top-2">
                                    <IoMdHeartEmpty className="text-2xl" onClick={handleWish}/>
                                </div>
                                <Slider {...settings}>
                                    {
                                        item.img.map((another)=>
                                        <img key={another.id} className=" rounded-xl" src={another} alt="" />
                                        )
                                    }
                                </Slider>
                            </div>
                            <div className="flex mt-3 items-center justify-between  font-bold">
                                <p style={{"fontSize":"16px"}}  className="m-0">{item.name}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-[13px]"/>
                                    <span className="text-[14px] font-semibold">{item.rating}</span>
                                </div>
                            </div>
                            <p style={{"fontSize":"15px", "color": "#717175"}} className="m-0">3,390 kilometers away</p>
                            <p style={{"fontSize":"15px", "color": "#717175"}} className="m-0">Nov 7-12</p>
                            <div className="flex items-center gap-1">
                                <span className="text-[16px] font-bold">${item.price} AUD</span>
                                <span>night {products?.length}</span>
                            </div>
                        </div>
                    )
                }
            </div>
            <section className={style.mobileNav} >
                <div className={` ${show && style.mobileMenu}`}>
                    <div >
                        <div className="flex gap-10">
                            {
                                icon.map((item)=>(
                                    <div onClick={() => router.push(`/${page}`)}>
                                        <div  style={{color :page === item.name  ? "#ff385c" : "#b0b0b0"}} onClick={()=>setPage(item.name) }>
                                            <div style={{color :page === item.name  ? "#ff385c" : "#b0b0b0"}} className=' flex justify-center text-2xl'>{item.icon}</div>
                                            <p style={{color :page === item.name  ? "black" : "#b0b0b0"}} className='m-0 '>{item.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
    </>
  )
}
