import MiniHeroSection from '@/component/main/MiniHeroSection'
import React from 'react'

export default function Listing() {
  return (
    <>
      <MiniHeroSection crumbs={['Home', 'Properties', 'Listing']} title='Properties' />
    </>
  )
}
