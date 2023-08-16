import Link from 'next/link'
import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
    <div className='flex flex-col w-1/4 m-auto mt-4 bg-neutral-200 shadow-lg rounded-md gap-4 p-4'>
      <div className="text-lg text-center">Sign Up</div>
      <div className='flex flex-col gap-4'>
        <input type="text" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Name' />
        <input type="text" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Email' />
        <input type="password" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Enter Password' />
        <input type="password" className='outline-none border-b-2 focus:border-cyan-300 border-gray-300 p-2 w-full' placeholder='Confirm Password' />
        <button className='hover:bg-green-300 hover:text-green-950 p-3 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold'>Sign Up</button>
        <div className="flex flex-col gap-2">
          <div className='text-sm'>Already signup? <Link prefetch href="/login" className='hover:text-cyan-400 font-medium'>Login</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Signup