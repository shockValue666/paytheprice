import React, { useEffect, useState } from 'react'


const fakeApi = async (e:string) => {
    // console.log('Api is called ', e)
    try{
        const res = await fetch(`https://www.instagram.com/${e}`,{
            mode:'no-cors'
        });
        const data = await res;
        console.log("data: ",data)
    }catch(e){
        console.log("error: ",e)
    }
}

function Platform({handleSelectChangePlatform,platform}:any) {

    const [username,setUsername] = useState("")

    useEffect(()=>{
        const timer = setTimeout(() => {
            fakeApi(username)
        }, 1500)

        return () => clearTimeout(timer)
    },[username])
  return (
    <div>
        <label className="label">
                    <span className="label-text">Platform</span>
        </label>
        <label className="input-group">
            <select className="select select-bordered mr-5" onChange={(e)=>handleSelectChangePlatform(e)} >
                <option disabled >Pick category</option>
                <option value={"instagram"}>instagram</option>
                <option value={"twitter"}>twitter</option>
                <option value={"twitch"}>twitch</option>
            </select>
            <span>@</span>
            <input type="text" placeholder="cocksucker" onChange={e=>setUsername(e.target.value)} className="input input-bordered" />
        </label>
    </div>
  )
}

export default Platform