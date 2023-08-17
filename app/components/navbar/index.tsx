"use client";

import Link from "next/link"
import {useEffect, useState} from "react";
import { signOut, useSession } from "next-auth/react"

type Props = {}

const Navbar = (props: Props) => {

    const [loggedIn, setloggedIn] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")

    const session = useSession();
    useEffect(() => {
        if(session?.status === "authenticated"){
            setloggedIn(true)
        }
      return () => {}
    }, [session])
    
    
  return (
    <div className="bg-gray-100 shadow-md py-3 px-6 w-full flex items-center justify-between">
        <div className="flex justify-between gap-7">
            <div className="flex gap-x-4">
                <Link className="font-medium px-3 py-2 hover:text-orange-300" href="/">Home</Link>
                {loggedIn && <Link className="font-medium px-3 py-2 hover:text-orange-300" prefetch href="/newblog">Create Blog</Link>}
            </div>
            <div className="flex justify-center items-center">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="outline-none px-4 py-2 w-48 md:w-full" placeholder="Search blog here..."/>
            </div>
        </div>
        <div className="flex gap-5">
            {
                loggedIn && <div className="flex items-center gap-1">
                    <span className="italic">Welcome!</span>
                    <span className="font-medium">{loggedIn && session?.data?.user?.email}</span>
                </div>
            }
            <div className="flex gap-4">
                {
                    loggedIn ? <button onClick={()=> signOut()} className="hover:bg-green-300 hover:text-green-950 p-4 h-6 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold">Sign Out</button> : 
                    <>
                    <Link prefetch href='/signup' className="hover:bg-green-300 hover:text-green-950 p-4 h-6 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold">Sign Up</Link>
                    <Link prefetch href='/login' className="hover:bg-green-300 hover:text-green-950 p-4 h-6 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold">Login</Link>
                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar