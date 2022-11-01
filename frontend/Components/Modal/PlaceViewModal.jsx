import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";
import style from '../../styles/Dashboard.module.css'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const PlaceViewModal = ({id}) => {
    const dispatch = useDispatch();
    const {  loading, product, error } = useSelector(state => state.productDetails);
    useEffect(() => {
        dispatch(getProductDetails(id));
        if (error) {
            dispatch(clearErrors())
        }
    }, [dispatch, error]);
    const ArrowLeft = (props) => (
        <button
            {...props}
            // style={{visibility:props?.currentSlide === 0 ? "hidden" : "visible"}}
            className={style.prev}>
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            // style={{visibility:props?.currentSlide === 4 ? "hidden" : "visible"}}
            className={style.next}>
            <BiChevronRight/>
        </button>
    );

    const settings = {
        arrows: true,
        dots: false,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
    };
    return (
    <div>
        <div >
            <div className="" >
                <Slider {...settings}>
                    {
                        product?.img?.map((another)=>
                            <img  className="h-64 rounded-xl" src={another} alt="" />
                        )
                    }
                </Slider>
            </div>
            <div className="flex mt-3 items-center justify-between  font-bold">
                <p style={{"fontSize":"16px"}}  className="m-0">{product.name}</p>
                <div className="flex items-center gap-1">
                    <FaStar className="text-[13px]"/>
                    <span className="text-[14px] font-semibold">{product.rating}</span>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-[16px] font-bold">${product.price} USD</span>
            </div>
        </div>
    </div>
  )
}

export default PlaceViewModal