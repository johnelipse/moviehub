
import Navbar from '@/components/front/navs/nav'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='background2 px-4 py-4  w-screen h-screen lg:overflow-x-hidden' >
      <Navbar/>
            <div className='text-center h-screen lg:px-80 md:px-10 px-4 flex flex-col items-center justify-center'>
        <h1 className="md:text-4xl text-[1.8rem] font-extrabold lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-300 to-green-400">Welcome to moviehub</h1>
      
        <p className="leading-7 [&:not(:first-child)]:mt-8 text-white">Discover a World of Movies and dive into our extensive library of movies, from timeless classics to the latest blockbusters. Whether you are a fan of action, romance, comedy, or drama, moviehub has something for everyone. Sign up now and start exploring moviehub. Your next favorite movie is just a click away!</p>
        <div className='mt-5'>
          <Link className='px-4 py-2 bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-md hover:background2' href="/movielib">Get Started</Link>
        </div>
      </div>
      
    </div>
  )
}
