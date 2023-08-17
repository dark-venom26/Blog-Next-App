"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/db';

type Props = {}

const Signup = (props: Props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <div className='flex flex-col w-1/4 m-auto mt-24 border-2 shadow-lg rounded-md gap-4 p-4'>
      <div className="text-lg text-center">Sign Up</div>
      <div className='flex flex-col gap-4'>

        <input type="email" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)} />

        <input type="password" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

        <input type="password" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />

        <button className='hover:bg-green-300 disabled:opacity-75 disabled:cursor-not-allowed hover:text-green-950 p-3 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold' onClick={() => signup()} disabled={(password !== confirmPassword) || !email || !password || !confirmPassword}>Sign Up</button>

        <div className="flex flex-col gap-2">
          <div className='text-sm'>Already signup? <Link prefetch href="/login" className='hover:text-cyan-400 font-medium'>Login</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Signup