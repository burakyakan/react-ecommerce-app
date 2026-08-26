import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import AnnouncementBar from './AnnouncementBar';
import ProductsDetailed from './ProductsDetailed.jsx'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <AnnouncementBar></AnnouncementBar>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/urun/:category/:brand/:title/:id" element={<ProductsDetailed/>} />
        
      </Routes>
      <Footer></Footer>
    </div>
    

  )
}

export default App
// #6b6375 güzel bi renk