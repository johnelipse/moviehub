import SearchFn from '@/components/search/search'
import Search from '@/components/search/search'
import { Togglebtn } from '@/components/togglebtn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav2() {
  return (
    <div className='flex justify-between items-center'>
      <div>
      <Link href="/">
      <Image className='w-10 h-10' width={508} height={501} src="/Elipse tech.png" alt="logo" />
      </Link>
      </div>

      <div>
        <SearchFn/>
      </div>

      <div className='flex items-center gap-4'>
        <Link className='px-4 py-1 bg-black dark:bg-[#020817] dark:text-white text-white rounded-md' href="/">Get Started</Link>
        <Link className='px-4 py-1 bg-black text-white dark:bg-[#020817] dark:text-white rounded-md' href="/">Login</Link>
        <Togglebtn/>
      </div>
    </div>
  )
}
