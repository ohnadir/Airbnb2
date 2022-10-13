import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Slider from "react-slick";
import style from '../styles/Home.module.css';
import { FaStar } from 'react-icons/fa';
import palace from '../Component/card.json'

export default function card() {
    const ArrowLeft = (props) => (
        <button
            {...props}
            className={style.prev}>
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={style.next}>
            <BiChevronRight/>
        </button>
    );

    const settings = {
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
    }; 
  return (
    <div className="max-w-7xl mx-auto px-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {
                palace.map((item)=> 
                    <div key={item.id}>
                        <div className={style.cardItem}>
                            <div>
                                <Slider {...settings}>
                                    {
                                        item.img.map((another)=>
                                        <img className="h-[250px] rounded-xl" src={another} alt="" />
                                        )
                                    }
                                </Slider>
                            </div>
                            <div className="flex mt-3 items-center justify-between  font-bold">
                                <p className="m-0 text-[15px]">{item.name}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-[13px]"/>
                                    <span className="text-[14px] font-semibold">4.96</span>
                                </div>
                            </div>
                            <p className="m-0 text-[15px] text-[#717175]">3,390 kilometers away</p>
                            <p className="m-0 text-[15px] text-[#717175]">Nov 7-12</p>
                            <div className="flex items-center gap-1">
                                <span className="text-[15px] font-semibold">$1,116 AUD</span>
                                <span>night</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}
