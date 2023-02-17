import React from 'react'

function Currency({currentCurrency,handleSelectChangeCurrency}:any) {
  return (
    <div>
        <label className="label">
                    <span className="label-text">Enter currency</span>
        </label>
        <label className="input-group">
            <select className="select select-bordered mr-5" onChange={(e)=>handleSelectChangeCurrency(e)} >
                <option disabled >Pick category</option>
                <option value={"BTC"}>BTC</option>
                <option value={"ETH"}>ETH</option>
                <option value={"SOL"}>SOL</option>
            </select>
            {/* <button className="btn">Go</button> */}
            <input type="text" placeholder="0.01" className="input input-bordered" />
            <div className='flex gap-x-4 justify-center '>
                
                <span>$</span>
                <div className=""> <p className='align-middle mt-[70%]'>in</p> </div>
                <span>{currentCurrency}</span>
            </div>
        </label>
    </div>
  )
}

export default Currency