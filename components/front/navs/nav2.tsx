import SearchFn from '@/components/search/search'
import { Togglebtn } from '@/components/togglebtn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav2() {
  return (
  <div className='z-[999999]'>
      <div className='z-[999999] flex justify-between items-center w-screen py-2 lg:px-8 md:px-4 px-4 fixed top-0 left-0 bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
      <div>
      <Link href="/">
      <Image className='w-8 h-8' width={508} height={501} src="/Elipse tech.png" alt="logo" />
      </Link>
      </div>

      <div className='lg:block md:block hidden'>
        <SearchFn/>
      </div>

      <div className='flex items-center gap-4'>
        <Link className='px-4 py-1  bg-black dark:bg-blue-600 dark:text-white text-white rounded-md lg:block md:block hidden' href="/">Get Started</Link>
        <Link className='px-4 lg:py-1 md:py-1 py-[0.2rem] bg-black text-white dark:bg-blue-600 dark:text-white rounded-md' href="/">Login</Link>
        <Togglebtn/>
      </div>
    </div>
    <div className='mt-12 w-screen lg:hidden md:hidden flex justify-center fixed top-[0%] left-0 bg-white/30 backdrop-blur-sm dark:bg-transparent/30 py-4 px-4'>
      <SearchFn/>
    </div>
  </div>
  )
}
