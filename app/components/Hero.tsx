
import Image from 'next/image'
import React from 'react'

export default function 
() {
  return (
    <div>
     <section className="flex flex-col items-center justify-center text-center h-screen bg-gray-200">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <Image src={'/pp copy.jpg'}
      alt="Profile Pic"
      width={300} height={300}
      className="rounded-full shadow-lg"/>     
      <p className="text-lg mb-6">Hi, I’m Muhammad Shafaat, a Web Developer!</p>
                                         
    </section>
    </div>
  )
}
