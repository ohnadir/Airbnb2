import React, { useState } from 'react'
import style from "../../styles/FooterModal.module.css";
import Currency from "../../language.json";
import {addToCurrency} from "../../Components/LocalStorage"

const CurrencyModal = () => {
    const [changeCurrency, setChangeCurrency] = useState("");
    
    const newCurrency = changeCurrency[0]?.code.concat(" ", changeCurrency[1].codeName);
    if(changeCurrency !== ""){
        addToCurrency(newCurrency)
    }

    return (
    <section className='helpSection'>
        <div>
            <h2 className=' font-semibold text-2xl  mb-2'>Choose a currency</h2>
        </div>
        <div className="grid grid-cols-4 gap-6  pb-10">
            {
                Currency.map((item)=>
                    (
                    <div
                        style={{
                        border: changeCurrency[2]?.name === item.currency[2].name ? "1px solid black" : ""
                    }} 
                        key={item.id} className={style.currencyContainer}>
                        <div onClick={()=>setChangeCurrency(item.currency)}>
                            <p className='m-0'>{item.currency[2].name}</p>
                            <div className='flex items-center gap-1'>
                                <span>{item.currency[1].codeName}</span> 
                                <span>-</span>
                                <span>{item.currency[0].code}</span>
                            </div>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    </section>
  )
}

export default CurrencyModal