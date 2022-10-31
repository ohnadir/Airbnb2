import React, { useState } from 'react'

const AddressModal = () => {
    const [options, setOptions] = useState("")
  return (
    <div>
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
            <button className='border px-10 py-1 shadow-md'>Save</button>
        </div>
    </div>
  )
}

export default AddressModal;