import { TbPool, TbWorld } from 'react-icons/tb';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import style from '../styles/footer.module.css'
export default function Footer() {
    return (
        <div className="flex justify-center  py-10 bg-[#f7f7f7]">
            <div className={style.sharedFooter}>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-2 font-semibold text-[16px]'>
                        <TbWorld /> <span>English (US)</span>
                    </div>
                    <div className='font-semibold text-[16px]'>
                        <span>$ AUD</span>
                    </div>
                    <div className='flex items-center gap-3 font-semibold text-[16px]'>
                        <FaFacebookF/>
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                </div>
                <p className='text-center m-0 mt-4'>© 2022 Airbnb, Inc.</p>
                <div className=''>
                    <ul className=''>
                        <p className='m-0 p-0  text-center'>Privacy</p>
                        <li className='m-0 p-0 text-center'>Terms</li>
                        <li className='m-0  p-0 text-center'>Sitemap</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
  