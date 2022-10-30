import React from 'react';
import { useRouter } from 'next/router';

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className='max-w-screen-2xl mx-auto px-4 flex'>
      <aside className='px-4 py-6 w-48 bg-gray-300 relative h-full overflow-y-auto'>
        <section >
            <div >
              <ul>
                <li onClick={()=> router.push('/Dashboard/Profile')}>Product</li>
                <li onClick={()=> router.push('/Dashboard/User')}>All users</li>
                <li onClick={()=> router.push('/Dashboard/Message')}>Orders</li>
                <li onClick={()=> router.push('/Dashboard/')}>Message</li>
              </ul>
            </div>
        </section>
      </aside>
      <section className="flex-grow">
        <main>{children}</main>
      </section>
    </div>
  )
}

export default DashboardLayout