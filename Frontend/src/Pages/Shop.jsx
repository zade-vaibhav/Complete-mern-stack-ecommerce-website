import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offer/Offers'
import NewCollection from '../Components/Newcollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
