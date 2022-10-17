import React, { useState } from 'react'
import {TbPool, TbBeach, TbToolsKitchen } from 'react-icons/tb'
import { GiIsland, GiCampingTent, GiGrandPiano, 
    GiFishingBoat, GiMountainCave, GiForestCamp, GiCastle, GiPaperWindmill, GiTreehouse } from 'react-icons/gi'
import { MdCabin, MdOutlineSurfing, MdSportsGolf, MdDownhillSkiing } from 'react-icons/md';
import { HiOutlineHomeModern } from 'react-icons/hi';
import { SlCup } from 'react-icons/si';
import style from '../styles/category.module.css'
import Slider from "react-slick";
import { BsFillMapFill } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function Category() {
    const [keyword, setKeyword] = useState();
    const category = [
        {id: 1, name: "Pool", icon: <TbPool /> },
        { id: 2,  name: "Beach", icon: <TbBeach /> },
        { id: 3, name: "Kitchen", icon: <TbToolsKitchen />},
        { id: 4,  name: "island" ,icon: <GiIsland />},
        { id: 5, name: "Camping", icon: <GiCampingTent/> },
        {id: 6, name: "Piano", icon: <GiGrandPiano/> },
        {id: 7, name: "Houseboats", icon: <GiFishingBoat/>},
        { id: 8, name: "Cave", icon: <GiMountainCave/> },
        {id: 9, name: "Camping", icon: <GiForestCamp />},
        { id: 10, name: "Castle", icon: <GiCastle />},
        {id: 11, name: "Windmill", icon: <GiPaperWindmill />},
        {id: 12, name: "Treehouse", icon: <GiTreehouse />},
        {id: 13, name: "Cabins", icon: <MdCabin/>},
        {id: 14, name: "Surfing" , icon:  <MdOutlineSurfing />,},
        { id: 15, name: "Golf", icon: <MdSportsGolf /> },
        { id: 16, name: "Ski-in/out", icon: <MdDownhillSkiing />}
    ];
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
        dots: false,
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        slidesToShow: 8,
        slidesToScroll: 8
    }
  return (
    <div className='max-w-7xl mx-auto px-4 mt-5'>
        <div>
            <div className='relative  px-8'>
            <Slider {...settings}>
                {
                    category.map((item)=>(
                        
                        <div className={style.iconContainer}  >
                            <div className={style.iconContainer} style={{borderBottom :keyword === item.name  ? "2px solid black" : "blue"}} onClick={()=>setKeyword(item.name) }>
                                <div className='text-3xl'>{item.icon}</div>
                                <p className=''>{item.name}</p>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            
            </div>
        </div>

    </div>
  )
}
/* categories.map((item)=> console.log(item) /* <div key={item.id}>
                        <div className='flex flex-row gap-4'>
                            <li>{item.icon}</li>
                            <p>{item.name}</p>
                        </div>
                    // </div> *//* 

                    {data.map((key) => {
                        const icon = category1.get(key);
                        return icon ? icon() : null;
                      })} */