import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Slider from "react-slick";
import style from '../styles/Home.module.css'
import { FaStar } from 'react-icons/fa';
import { BsFillMapFill } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import palace from './place.json';
import { message } from 'antd';
import Link from "next/link";
import Category from "./category";

export default function Card() {
    const ArrowLeft = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 5 ? "hidden" : "visible"}}
            className={style.prev}>
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 5 ? "hidden" : "visible"}}
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
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* <Category/> */}
        <div className={style.locationTiger}>
            <div className={style.location} >Show map <BsFillMapFill /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:grid-cols-2">
            {
                palace.map((item)=> 
                    <Link  href={`/id/${item.id}`}>
                        <div key={item.id} className={style.cardItem}>
                            <div className="relative">
                                <div className="absolute  text-white transition-all hover:text-[#717175] z-50 right-2 top-2"><IoMdHeartEmpty className="text-2xl" onClick={handleWish}/></div>
                                <Slider {...settings}>
                                    {
                                        item.img.map((another)=>
                                        <img key={another.id} className=" rounded-xl" src={another} alt="" />
                                        )
                                    }
                                </Slider>
                            </div>
                            <div className="flex mt-3 items-center justify-between  font-bold">
                                <p className="m-0 text-[15px] ">{item.name}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-[13px]"/>
                                    <span className="text-[14px] font-semibold">{item.rating}</span>
                                </div>
                            </div>
                            <p className="m-0 text-[15px] text-[#717175]">3,390 kilometers away</p>
                            <p className="m-0 text-[15px] text-[#717175]">Nov 7-12</p>
                            <div className="flex items-center gap-1">
                                <span className="text-[15px] font-semibold">${item.price} AUD</span>
                                <span>night</span>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    </div>
  )
}
