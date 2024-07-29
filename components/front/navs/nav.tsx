import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <Link href="/">
      <Image className='w-10 h-10' width={508} height={501} src="/Elipse tech.png" alt="logo" />
      </Link>
    </div>
  )
}
