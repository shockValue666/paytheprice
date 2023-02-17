import React, { useState } from 'react'

import { useSession, signIn, signOut } from "next-auth/react"


function Sic() {
  const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  return (
    <div>
        <form action="" onSubmit={(e)=>{e.preventDefault();console.log("email :",email," password: ",password)}}>
            <div className="form-control flex flex-col items-center gap-y-8">
                <div>
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered" onChange={e=>setEmail(e.target.value)}/>
                    </label>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" placeholder="" className="input input-bordered"  onChange={e=>setPassword(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit" onClick={async ()=>{console.log("email :",email," password: ",password);const res = await signIn('credentials',{email,password,redirect:false});console.log("res: ",res)}}>submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Sic