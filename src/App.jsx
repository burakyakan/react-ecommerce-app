import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import AnnouncementBar from './AnnouncementBar';
import ProductsDetailed from './ProductsDetailed.jsx'
import FAQ from './Faq.jsx'
import About from './About.jsx'
import KVVK from './KVKK.jsx'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (product) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(item => item.id === product.id);

      if (isAlreadyFavorite) {
        return prevFavorites.filter(item => item.id !== product.id);
        
      } else {
        return [...prevFavorites, product]
      }
    });
  }

  return (
    <div>
      <AnnouncementBar></AnnouncementBar>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/urun/:category/:brand/:title/:id" element={<ProductsDetailed/>} />
        <Route path="/sss" element={<FAQ/>} />
        <Route path="/hakkimizda" element={<About/>} />
        
      </Routes>
      <Footer></Footer>
    </div>
    

  )
}

export default App
// #6b6375 güzel bi renk