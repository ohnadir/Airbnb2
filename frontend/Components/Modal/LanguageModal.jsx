import React, { useState } from 'react';
import style from "../../styles/FooterModal.module.css"
import Currency from "../../language.json";
import { addToLanguage } from "../../Components/LocalStorage"

const LanguageModal = () => {
    const [changeLanguage, setChangeLanguage] = useState("");
    
    const language = changeLanguage.language?.concat(" ", changeLanguage.countryCode);
    if(changeLanguage !== ""){
        addToLanguage(language)
    }
    return (
        <div>
            <section className='helpSection grid grid-cols-1 gap-6 '>
                <h2 className=' font-semibold text-2xl  mb-2'>Suggested language and region</h2>
                <div className={style.currencyContainer}>
                    <p className='m-0'>{changeLanguage.language}</p>
                    <p className='m-0'>{changeLanguage.name}</p>
                </div>

            <h2 className=' font-semibold text-2xl  mb-2'>Choose a language and region</h2>
            <div className="grid grid-cols-4 gap-6  pb-10">
                {
                    Currency.map((item)=>
                        (
                        <div
                            style={{
                            border: changeLanguage.name === item.name ? "1px solid black" : ""
                        }} 
                            key={item.id} className={style.currencyContainer}>
                            <div onClick={()=>setChangeLanguage(item)}>
                                <p className='m-0'>{item.language}</p>
                                <p className='m-0'>{item.name}</p>
                                
                            </div>
                        </div>
                        )
                    )
                }
            </div>
            
      </section>
    </div>
  )
}

export default LanguageModal