import React from 'react';
import style from "../../styles/FooterModal.module.css"

const SupportModal = () => {
  return (
    <div>
        <section className='helpSection grid grid-cols-1 gap-6 '>
            <div>
                <h2 className=' font-bold  mb-2'>Support</h2>
                <div className='grid md:grid-cols-3  gap-2'>
                    <p className='m-0'>Help Center</p>
                    <p className='m-0'>AirCover</p>
                    <p className='m-0'>Safety information</p>
                    <p className='m-0'>Supporting people with disabilities</p>
                    <p className='m-0'>Cancellation options</p>
                    <p className='m-0'>Our COVID-19 Response</p>
                    <p className='m-0'>Report a neighborhood concern</p>
                </div>
            </div>
            <div className={style.simpleDivider}>
                <p></p>
            </div>
            <div>
                <h2 className='  font-bold mb-2'>Community</h2>
                <div className='grid md:grid-cols-3  gap-2'>
                    <p className='m-0'>Airbnb.org: disaster relief housing</p>
                    <p className='m-0'>Support Afghan refugees</p>
                    <p className='m-0'>Combating discrimination</p>
                </div>
            </div>
            <div className={style.simpleDivider}>
                <p></p>
            </div>
            <div>
                <h2 className='font-bold  mb-2'>Hosting</h2>
                <div className='grid md:grid-cols-3 gap-2'>
                    <p className='m-0'>Try hosting</p>
                    <p className='m-0'>AirCover for Hosts</p>
                    <p className='m-0'>Explore hosting resources</p>
                    <p className='m-0'>Visit our community forum</p>
                    <p className='m-0'>How to host responsibly</p>
                </div>
            </div>
            <div className={style.simpleDivider}>
                <p></p>
            </div>
            <div>
                <h2 className='font-bold  mb-2'>Airbnb</h2>
                <div className='grid md:grid-cols-3 gap-2'>
                    <p className='m-0'>Newsroom</p>
                    <p className='m-0'>Learn about new features</p>
                    <p className='m-0'>Letter from our founders</p>
                    <p className='m-0'>Careers</p>
                    <p className='m-0'>Investors</p>
                    <p className='m-0'>Gift cards</p>
                </div>
            </div>
            <div className={style.simpleDivider}>
                <p></p>
            </div>
        </section>
    </div>
  )
}

export default SupportModal