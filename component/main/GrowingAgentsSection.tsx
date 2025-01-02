import React from 'react'
import Link from 'next/link'

export default function GrowingAgentsSection() {
  return (
    <section className='bg-secondary'>
      <div className='py-20 max-w-2xl mx-auto'>
        <div className='text-center'>
        <h2 className='text-4xl font-extrabold mb-14 capitalize'>Be part of our growing real estate agents</h2>
        
            <Link href='' className='btn btn-accent px-20 rounded-full'>Apply For Real Estate Agents</Link>
        </div>
      </div>
    </section>
  )
}
