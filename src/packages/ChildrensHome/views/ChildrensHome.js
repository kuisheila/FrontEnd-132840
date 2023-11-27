import React, { useState } from 'react';
import Navbar from '../../Home/components/Navbar';
import Footer from '../../Home/components/Footer';
import ChildrensTable from '../components/ChildrensTable'
import Sidebar from '../../Home/components/Sidebar'
 
 

function Shop() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 
 
  return (
    <div>
        <ChildrensTable/>
         <Footer/>
    </div>
  )
}

export default Shop;