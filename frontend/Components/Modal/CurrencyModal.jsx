import React, { useState } from 'react'
import style from "../../styles/FooterModal.module.css";
import Currency from "../../language.json"

const CurrencyModal = ({handleCurrency}) => {
    const [changeCurrency, setChangeCurrency] = useState("");
    const handleChange=(currency)=>{
        setChangeCurrency(item.currency)
    }
    return (
    <section className='helpSection'>
        <div>
            <h2 className=' font-semibold text-2xl  mb-2'>Choose a currency</h2>
        </div>
        <div className="grid grid-cols-4 gap-6 ">
            {
                Currency.map((item)=>
                    (
                    <div
                        onClick={handleCurrency(changeCurrency)}
                        style={{
                        border: changeCurrency[1]?.name === item.currency[1].name ? "1px solid black" : ""
                    }} 
                        key={item.id} className={style.currencyContainer}>
                        <div onClick={()=>setChangeCurrency(item.currency)}>
                            <p className='m-0'>{item.name}</p>
                            <div className='flex items-center gap-1'>
                                <span>{item.currency[1].name}</span> 
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