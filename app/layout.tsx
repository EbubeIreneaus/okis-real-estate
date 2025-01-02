"use client"
import {useEffect} from 'react'
import './globals.css';
import './style.css'
import { AOSInit } from '@/lib/aos';
import 'aos/dist/aos.css'; 

export default function RootLayout({children}: Readonly<{children: React.ReactNode }>) {
  useEffect(()=>{
    AOSInit()
  }, [])

  return (
    <html lang="en">
      <body
      className='bg-base-100 max-w-[100vw] w-full overflow-x-hidden'
      >
        {children}
      </body>
    </html>
  );

}
