import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri';
import {  Modal } from 'antd';

const AddressModal = ({setAddressModalOpen}) => {
    const [options, setOptions] = useState("");
    const [modal, setModal] = useState(false);
    const handleSubmit=()=>{
        const address = {
            province:options.province,
            phone:options.phone,
            city:options.city,
            village:options.village,
            address: options.address
        }
    }
    return (
    <div>
        <div className='mb-0 px-5 border py-2 bg-white flex items-center justify-between'>
            <span>Edit Address</span><RiCloseFill onClick={() => setModal(true)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
        </div>
        <div style={{backgroundColor: "#EEEEEE"}} className='px-5 py-6 flex justify-between gap-5 {style.addressModal}'>
            <div className='w-1/2 grid grid-cols-1 gap-2'>
                <div>
                    <label htmlFor="Name">Full Name</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='input full name' />
                </div>
                <div>
                    <label htmlFor="Name">Mobile Number</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='input phone number' />
                </div>
                <div>
                    <label htmlFor="Name">Province</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='input full name' />
                </div>
                <div>
                    <label htmlFor="Name">City/Municipality</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='input city' />
                </div>
                <div>
                    <label htmlFor="Name">Village</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='input full name' />
                </div>
                
            </div>
            <div className='w-1/2 grid grid-cols-1 gap-2'>
                <div>
                    <label htmlFor="Name">Address</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='House no. / building / street / area' />
                </div>
                <div>
                    <label htmlFor="Name">Landmark (Optional)</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='E.g. beside train station' />
                </div>
                <div>
                    <label className='text-xs' htmlFor="Name">Select a label for effective delivery:</label>
                    <div className='flex justify-between items-center mt-2'>
                        <button className='border px-10 py-1 shadow-md' onClick={()=>setOptions("home")}>Home</button>
                        <button className='border px-10 py-1 shadow-md' onClick={()=>setOptions("office")}>Office</button>
                    </div>
                </div>
                <div>
                    <label className='text-xs' htmlFor="Name">Default Address (Optional)</label>
                    <div className='border p-2'>
                        <input type="radio" /> <span>Default shipping address</span> <br />
                        <input type="radio" /> <span>Default billing address</span>
                    </div>

                </div>
            </div>
            
        </div>
        <div className='bg-white py-3 px-5 flex justify-end'>
            <button onClick={handleSubmit} className='border px-10 py-1 shadow-md'>Save</button>
        </div>
        {
        modal &&  
          <Modal
              open={modal}
              centered
              width={370}
              closable={false}
              footer={false}
              style={{borderRadius:"30px"}}
              bodyStyle={{
                margin:"0", border:"none", 
                padding:0
              }}
              >
                <div className=' p-4'>
                    <div  className=''>
                        <h1 className='text-xs font-bold'>Discard your address card?</h1>
                        <p>You haven’t finished your address card yet. Are you sure you want to leave and discard your inputs?</p>
                    </div>
                    <div className='flex justify-end items-center gap-5'>
                        <span className='cursor-pointer' onClick={()=>setModal(false)}>Keep Editing</span>
                        <button onClick={() => setAddressModalOpen(false)} style={{backgroundColor:"#F5F5F5", color:"#FF385C"}} className='px-10 py-2'>Discard</button>
                    </div>
                </div>
          </Modal>
        }
    </div>
  )
}

export default AddressModal;