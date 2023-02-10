import React from 'react'

function Select({pageState,setPageState}:any) {

    // const setPageState = (e:React.ChangeEvent<HTMLInputElement>) =>{
    //     console.log("changed to ",e.target.checked)
    // }


  return (
    <div>
        <label className="swap swap-flip text-9xl">
  
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" onChange={(e)=>{setPageState(e.target.checked)}}/>
            <div className='flex flex-col swap-on justify-center items-center'>
                <div className="">😈</div>
                <h4 className="text-[25px]">send</h4>
            </div>
            <div className='flex flex-col swap-off items-center justify-center'>
                <div className="">😇</div>
                <h4 className="text-[25px]">receive</h4>
            </div>
        
        </label>
    </div>
  )
}

export default Select