"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";


function Header() {

    const path = usePathname();

    const router=useRouter();
    useEffect(()=>{
        console.log(path);
    })
  return (
    <div className='flex p-2 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/logo.svg'}
      width={160}
      height={100}
      alt='logo'
      />
      <ul className='hidden md:flex gap-6 '>
        
        <a href='/dashboard'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard' && 'text-primary font-bold'}
        `}>Dashboard</li>
       </a>
        <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard/questions' && 'text-primary font-bold'}
        `}>Questions</li>
        <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard/upgrade' && 'text-primary font-bold'}
        `}>Upgrade</li>
        <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard/how' && 'text-primary font-bold'}
        `}>How it Works?</li>
      </ul>
      <a href='/dashboard'>
      <Button>Get Started</Button>
      </a>
    </div>
  )
}

export default Header
