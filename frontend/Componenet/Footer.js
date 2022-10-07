import { TbWorld } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import styles from '../styles/footer.module.css'
export default function Footer() {
    return (
      <div className={styles.container}>
            <div className='max-w-7xl mx-auto px-2'>
                <div className={styles.footerContainer}>
                    <div className="flex items-center relative">
                        <p className='mb-0 pb-0 '>© 2022 Airbnb, Inc.</p>
                        <ul className={styles.footerList}>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Sitemap</li>
                            <li>Destinations</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <div className='flex items-center gap-2'>
                        <TbWorld />  <span className='px-2'>English (US)</span>
                        </div>
                        <div>
                            $ USD
                        </div>
                        <div className='flex items-center '>
                            Support & resources <IoIosArrowUp className=''/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
  