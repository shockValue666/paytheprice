import React, { useState } from 'react'
import LoginButton from './LoginButton';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import google from '../../assets/icons8-google-48.svg'
import instagram from '../../assets/icons8-instagram.svg'

function Receive() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  return (
    <div>
                <div>
                    <button className="btn btn-primary" type="submit" onClick={()=>{signIn()}}>log in with email</button>
                </div>
                <div>
                    <button className="btn btn-primary bg-white" type="submit" onClick={()=>{signIn("google",{callbackUrl:"http://localhost:3000"})}}> 
                    <Image src={google} width={20} height={20} className={"mr-2"} alt={"poutsa"} /> log in with google</button>
                </div>
                <div>
                    <button className="btn btn-primary bg-white" type="submit" onClick={()=>{signIn("instagram")}}> 
                    <Image src={instagram} width={20} height={20} className={"mr-2"} alt={"poutsa"} /> log in with instagram</button>
                </div>
    </div>
  )
}

export default Receive