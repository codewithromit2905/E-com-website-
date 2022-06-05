import React from 'react'
import Annoucemnet from '../Component/Annoucement'
import Categories from '../Component/Categories'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Newsletter from '../Component/Newsletter'

import Products from '../Component/Products'
import Sorter from '../Component/Sorter'





const Home = () => {
  return (
    <div>
        <Annoucemnet/>
      <Navbar/>
      <Sorter/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    
    
      
    </div>
  )
}

export default Home

