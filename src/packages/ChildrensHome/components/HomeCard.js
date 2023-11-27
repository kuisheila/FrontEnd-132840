import React from 'react'
import Navbar from '../../Home/components/Navbar';
import Footer from '../../Home/components/Footer';
import AddHome from '../../ChildrensHome/components/AddHome'

function HomeCard() {
  return (
    <div>
        <Navbar/>
        <AddHome/> 
         <Footer/>
    </div>
  )
}

export default HomeCard