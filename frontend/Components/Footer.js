import { TbWorld } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import styles from '../styles/footer.module.css'
export default function Footer() {
    return (
      <div>
            <div className='max-w-7xl mx-auto  py-5'>
                <div className="flex flex-col-reverse gap-3 lg:flex-row items-center justify-center lg:justify-between">
                    <div className="flex flex-col lg:flex-row items-center relative">
                        <p className='mb-0 pb-0 '>© 2022 Airbnb, Inc.</p>
                        <ul className="flex m-0 gap-5">
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
                        <div className={styles.support}>
                            <span>Support & resources</span> <IoIosArrowUp className={styles.arrowIcon}/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
  