import React, { useState } from 'react';
import DashboardLayout from '../../Components/Layouts/DashboardLayout';
import { BiEditAlt } from 'react-icons/bi';
import { HiOutlineCamera } from 'react-icons/hi';
import style from "../../styles/Dashboard.module.css"
import { useRouter } from 'next/router';
import {  Modal } from 'antd';
import Address from "../../Components/Profile/Address"
import Orders from "../../Components/Profile/Orders"
import UserMessage from "../../Components/Profile/UserMessage"
import { RiCloseFill } from 'react-icons/ri';

const Profile = () => {
  const [options, setOptions] = useState("");
  const [edit, setEdit] = useState("");
  const handleOption = (name) => {
    setOptions(name);
  };
  return (
    <div className='mt-10'>
      <div className='relative'>
        <img style={{borderRadius:"50%", width:"20%"}} className=' mx-auto ' src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1667206841/young-girl_hrpmk9.jpg" alt="" />
        <HiOutlineCamera onClick={() => setEdit("photo")} style={{right: "41.5%", color:"white"}} className='mx-auto cursor-pointer absolute bg-gray-300 w-7 h-7 rounded-full p-1  top-3/4' />
      </div>
      <section className="name text-center mt-2">
        <div className='flex items-center gap-2 justify-center'>
          <p className='m-0 text-base font-semibold'>Nadir Ahmed</p>
          <BiEditAlt  onClick={() => setEdit("name")} className=' w-6 h-6 hover:bg-gray-300  transition-all cursor-pointer rounded-full p-1' />
        </div>
        <p className='m-0 '>qx.nadir@gmail.com</p>
      </section>
      <nav>
        <div className={style.tab}>
          <ul className='flex gap-10 justify-center m-0 p-0'>
            <li style={{backgroundColor: options === "address" ? "#D1D5DB" : ""}} onClick={() => handleOption("address")}>Address</li>
            <li style={{backgroundColor: options === "orders" ? "#D1D5DB" : ""}} onClick={() => handleOption("orders")}>Orders</li>
            <li style={{backgroundColor: options === "message" ? "#D1D5DB" : ""}} onClick={() => handleOption("message")}>Message</li>
            <li style={{backgroundColor: options === "message" ? "#D1D5DB" : ""}} onClick={() => handleOption("message")}>Message</li>
          </ul>
        </div>
        <div>
          { options === "" ?
            <h1 className='text-center mt-5 text-xl'>Thanks for using Airbnb</h1>
          : 
            <div className='mt-5 ml-5'>
              {options === "address" ? <Address/> : ""}
              {options === "orders" ? <Orders/> : ""}
              {options === "message" ? <UserMessage/> : ""}
            </div>
          }
        </div>
      </nav>

      {
        edit &&  
          <Modal
              open={edit}
              centered
              width={370}
              closable={false}
              footer={false}
              className={{borderRadius:"30px"}}
              bodyStyle={{
                margin:"0", border:"none", 
                padding:0
              }}
              >
              <div className='p-3 m-0'>
                  <RiCloseFill onClick={() => setEdit("")} className='w-8 h-8 mr-0 float-right  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                <div className=' mt-10'>

                  {
                    edit==="name" ? 
                      <div>
                        <label for="fname">Full Name</label>
                        <input className='w-full outline-none border py-2 px-2 mt-1 mb-3' type="text" placeholder='Enter your full name' />
                        <div className='flex justify-end'>
                          <button style={{backgroundColor:"#FF385C"}} className='text-white px-5  py-1 font-semibold'>Update</button>
                        </div>
                      </div>
                    
                    : "" || 
                    edit==="photo" ? 
                    <h1>Nadir2</h1> 
                    : ""
                  }
                </div>
              </div>
          </Modal>
        }
    </div>
  )
}
Profile.Layout = DashboardLayout;
export default Profile