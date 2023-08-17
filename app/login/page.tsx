"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import {signIn} from "next-auth/react"

type Props = {}

const Login = (props: Props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = async () => {
    await signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex flex-col w-1/4 m-auto mt-24 border-2 shadow-lg rounded-md gap-4 p-4'>
      <div className="text-lg text-center">Login</div>
      <div className='flex flex-col gap-4'>

        <input type="email" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)} />

        <input type="password" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

        <button className='hover:bg-green-300 hover:text-green-950 disabled:opacity-75 disabled:cursor-not-allowed p-3 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold' onClick={() => handleSignIn()} disabled={!email || !password}>Login</button>

        <div className="flex flex-col gap-2">
          <div className='text-sm'>Not yet signup? <Link prefetch href="/signup" className='hover:text-cyan-400 font-medium'>Signup</Link></div>
          <div className='text-sm'><Link prefetch href="/forgetpassword" className='hover:text-cyan-400 font-medium'>Forget Password? </Link></div>
        </div>
      </div>
    </div>
  )
}

export default Login