import { TbWorld } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import styles from '../styles/footer.module.css';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImInstagram } from 'react-icons/im';
export default function Footer({ children, href }) {
    const [footerIcon, setFooterIcon] = useState("red");
    const router = useRouter();
    // const { asPath, pathname } = useRouter();
    const demo = <>
        <span>Support & resources</span> <IoIosArrowUp className={styles.arrowIcon}/>
    </>
    const demo2 = <>
        <div className='flex gap-5'>
            <FaFacebookF/>
            <BsTwitter/>
            <ImInstagram/>
        </div>
    </>
    useEffect(() => {
        if (router.pathname === '/place/id') {
            setFooterIcon(demo2);
        } else {
            setFooterIcon(demo);
        }
    }, [router]);
    return (
        <div>
            <div className='container mx-auto p-4'>
                <div className="flex flex-col-reverse gap-3 lg:flex-row items-center justify-center lg:justify-between">
                    <div className="flex flex-col lg:flex-row items-center relative">
                        <p className='mb-0 pb-0 '>© 2022 Airbnb, Inc.</p>
                        <ul className="flex m-0 gap-8">
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <div className='flex items-center gap-2'>
                            <TbWorld />  <span className='px-2'>English (US)</span>
                        </div>
                        <div>
                            $ USD
                        </div>
                        <div className='flex gap-5'>
                            <FaFacebookF/>
                            <BsTwitter/>
                            <ImInstagram/>
                        </div> 
                    </div>
                </div>
            </div>
      </div>
    )
  }
  