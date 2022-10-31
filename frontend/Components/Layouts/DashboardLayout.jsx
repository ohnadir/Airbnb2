import React from 'react';
import { useRouter } from 'next/router';
import style from "../../styles/Dashboard.module.css"

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className='max-w-screen-2xl mx-auto px-4 flex justify-between'>
      <aside className={style.aside}>
        <div >
          <ul>
            <li onClick={()=> router.push('/Dashboard/Profile')}>Profile</li>
            <li onClick={()=> router.push('/Dashboard/User')}>All users</li>
            <li onClick={()=> router.push('/Dashboard/Message')}>Orders</li>
            <li onClick={()=> router.push('/Dashboard/Place')}>Place</li>
            <li onClick={()=> router.push('/Dashboard/')}>Message</li>
          </ul>
        </div>
      </aside>
      <section className="w-full">
        <main>{children}</main>
      </section>
    </div>
  )
}

export default DashboardLayout