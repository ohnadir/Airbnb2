import React from 'react'

const PlaceUpdateModal = ({id}) => {
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
    <div>PlaceUpdateModal {id}
        <div style={{backgroundColor: "#EEEEEE"}} className='px-5 py-6 flex justify-between gap-5 {style.addressModal}'>
            <div className='w-1/2 grid grid-cols-1 gap-2'>
                <div>
                    <label htmlFor="Name">Price</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='input price' />
                </div>
                <div>
                    <label htmlFor="Name">Mobile Number</label>
                    <input className='w-full border outline-none px-2 py-1 mt-1' type="text" placeholder='input price' />
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
    </div>
  )
}

export default PlaceUpdateModal