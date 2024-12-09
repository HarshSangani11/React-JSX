import React from 'react'
import Flat300 from './Components/Flat300'
import Slider from './Components/Slider'
import MedalWorthy from './Components/MedalWorthy'
import GrandGlobalBrand from './Components/GrandGlobalBrand'
import ShopByCategory from './Components/ShopByCategory'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Flat300/>
      <Slider/>
      <MedalWorthy/>
      <GrandGlobalBrand/>
      <ShopByCategory/>
      <Footer/>
    </BrowserRouter>
  )
}
