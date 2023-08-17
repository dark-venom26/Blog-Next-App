"use client";

import { sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link'
import React, { useState } from 'react'
import { auth } from '../lib/db';

type Props = {}

const ForgetPassword = (props: Props) => {

  const [email, setEmail] = useState("")

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email)
    setEmail("")
  }

  return (
    <div className='flex flex-col w-1/4 m-auto mt-24 border-2 shadow-lg rounded-md gap-4 p-4'>
    <div className="text-lg text-center">Forget Password</div>
    <div className='flex flex-col gap-4'>

    <input type="email" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)} />

      <button className='hover:bg-green-300 hover:text-green-950 disabled:opacity-75 disabled:cursor-not-allowed p-3 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold' disabled={!email} onClick={()=> resetEmail()}>Send Link</button>

      <div className="flex flex-col gap-2">
        <div className='text-sm'>Password remember? <Link prefetch href="/login" className='hover:text-cyan-400 font-medium'>Login</Link></div>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword