import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import WhatWeDo from '../components/WhatWeDo'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <WhatWeDo/>
         <Footer/>
    </div>
  )
}

export default Home