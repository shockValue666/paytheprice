import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Receive from './components/Receive'
import Select from './components/Select'
import Send from './components/Send'

const Home: NextPage = () => {
  const [pageState,setPageState]=useState(false)

  useEffect(()=>{
    console.log("pageState: ",pageState)
  },[pageState])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar pageState={pageState} setPageState={setPageState}/>


      {/* <Select/> */}
      {
        pageState ? 
        <Send/>
        : 
        <Receive/>
      }



  

      <button className="btn btn-primary">Button</button>

    </div>
  )
}

export default Home
