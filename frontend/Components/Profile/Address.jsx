import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi';
import {  Modal } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import AddressModal from './AddressModal';
const Address = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className='border max-w-max p-3'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='m-0'>Nadir Ahmed</p>
            <p className='m-0'>(+880) 1756953936</p>
          </div>
          <BiEditAlt onClick={()=>setModalOpen(true)} className=' w-7 h-7 hover:bg-gray-300  transition-all cursor-pointer rounded-full p-1 ' />
        </div>
        <p className='m-0'>Dhaka, Dhaka-South, Khilgaon, H-256/1, R-02, Shantipur, Khilgaon</p>
        <div className='flex gap-6 text-xs mt-3'>
          <div className='px-2 py-1' style={{backgroundColor: "#EBF4F6", color:"#007787"}}>Home</div>
          <div className='px-2 py-1' style={{backgroundColor: "#EEEEEE"}}>Default Shipping Address</div>
          <div className='px-2 py-1' style={{backgroundColor: "#EEEEEE"}}>Default Billing Address</div>
        </div>
      </div>
      {
        modalOpen &&  
          <Modal
              open={modalOpen}
              width={670}
              closable={false}
              footer={false}
              className={{borderRadius:"30px"}}
              bodyStyle={{
                margin:"0", border:"none", 
                padding:0
              }}
              >
              <div className=' '>
                  <div className='mb-0 px-5 border py-2 bg-white flex items-center justify-between'>
                    <span>Edit Address</span><RiCloseFill onClick={() => setModalOpen(false)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                  </div>
                  <div  className=''>
                    <AddressModal/>
                  </div>
              </div>
          </Modal>
        }
    </div>

  )
}

export default Address