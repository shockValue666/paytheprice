import React from 'react'
import {useSession} from 'next-auth/react'
import Router from 'next/router'

function Protected() {
    const session = useSession()
    console.log("session: ",session)
  return (
    <div>protected</div>
  )
}

export default Protected