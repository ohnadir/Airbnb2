import React, { useState } from 'react'
import DashboardLayout from '../../Components/Layouts/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { BiEditAlt } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import Loader from "../../Components/Loading"
import {  Modal } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import PlaceViewModal from '../../Components/Modal/PlaceViewModal';
import PlaceUpdateModal from '../../Components/Modal/PlaceUpdateModal';
const Place = () => {
  const [modal, setModal] = useState()
  const { loading, products, error } = useSelector(state => state.products);
  
  return (
    <>
    {
      loading ? <Loader/> :
      <div className='m-3'>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:grid-cols-2">
          {
            products?.data?.map((item)=> 
              <div className='' key={item.id} >
                <div className="flex items-center justify-between p-1  border">
                  <div>
                    <p className="m-0">{item.name}</p>
                    <p className="m-0">Price:- {item.price}</p>
                  </div>
                  <div className='flex items-center gap-2  cursor-pointer'>
                    <AiFillEye onClick={()=>setModal([item.id, "view"])} className='w-7 h-7 hover:bg-gray-200 rounded-full p-1'/>
                    <BiEditAlt onClick={()=>setModal([item.id, "edit"])} className='w-7 h-7 hover:bg-gray-200 rounded-full p-1'/>
                    <BsTrash onClick={()=>setModal([item.id, "delete", item.name])} className='w-6 h-6 hover:bg-gray-200 rounded-full p-1'/>
                  </div>
                </div>

                
              </div>
            )
          }
        </div>
        {
          modal &&  
            <Modal
              open={modal}
              centered
              width={570}
              closable={false}
              footer={false}
              className={{borderRadius:"30px"}}
              bodyStyle={{
                margin:"0", border:"none", 
                padding:0
              }}
              >
                <div className='p-3 m-0'>
                    <RiCloseFill onClick={() => setModal("")} className='w-8 h-8 mr-0 float-right  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                  <div className=' mt-10'>
                    {
                      modal[1] ==="view" ? 
                        <PlaceViewModal id={modal[0]}/>
                      
                      : "" || 
                      modal[1]==="edit" ? 
                      <PlaceUpdateModal id={modal[0]} />
                      : "" ||
                      modal[1]==="delete" ? 
                      <div>
                        <div className=' flex items-center gap-2'>
                          <RiErrorWarningLine className='text-2xl' style={{color: "#FAB52A"}} />
                          <span className='text-base font-semibold'>
                            Are you sure delete {modal[2]}?
                          </span>
                        </div>
                        <span>If you delete this place . It will delete permanently and it never getting back</span>

                        <div className='flex items-center gap-3 justify-end mt-5'>
                          <button className='bg-gray-100 px-5 py-1 font-semibold'>Cancel</button>
                          <button style={{color:"#FF385C", border: "1px solid #FF385C"}} className='font-semibold px-5 py-1'>Confirm</button>
                        </div>
                      </div>
                      : ""
                    }
                  </div>
                </div>
            </Modal>
        }
      </div>
    </div>
    }
    
    </>
  )
}
Place.Layout = DashboardLayout;
export default Place