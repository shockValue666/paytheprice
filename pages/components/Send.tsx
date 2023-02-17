import React, { useState } from 'react'
import Currency from './inputFields/Currency'
import Platform from './inputFields/Platform'


function Send() {
    let [currentCurrency,setCurrentCurrency] = useState("BTC")
    const [platform,setPlatform] = useState("instagram")

    const handleSelectChangeCurrency = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        // console.log(e.target.value)
        setCurrentCurrency(e.target.value)
    }

    const handleSelectChangePlatform = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        // console.log(e.target.value)
        setPlatform(e.target.value)
    }
  return (
    <div>
        <div className="form-control flex flex-col gap-y-8 ">
            <div>
                <Currency currentCurrency={currentCurrency} handleSelectChangeCurrency={handleSelectChangeCurrency}/>
            </div>
        

            <div>
                <Platform platform={platform} handleSelectChangePlatform={handleSelectChangePlatform}/>
            </div>
        </div>
    </div>
  )
}

export default Send