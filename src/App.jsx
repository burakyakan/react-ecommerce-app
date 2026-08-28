import { useEffect, useState } from 'react'
import './App.css'
import ScrollToTop from './ScrollToTop.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import AnnouncementBar from './AnnouncementBar';
import ProductsDetailed from './ProductsDetailed.jsx'
import FAQ from './Faq.jsx'
import About from './About.jsx'
import KVKK from './KVKK.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import TermsAndConditions from './TermsAndConditions.jsx'
import DistanceSalesAgreement from './DistanceSalesAgreement.jsx'
import CustomerServices from './CustomerServices.jsx'
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
      <ScrollToTop></ScrollToTop>
      <AnnouncementBar></AnnouncementBar>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/urun/:category/:brand/:title/:id" element={<ProductsDetailed />} />
        <Route path="/sss" element={<FAQ />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/kvkk-aydinlatma-metni" element={<KVKK />} />
        <Route path="/gizlilik-sozlesmesi" element={<PrivacyPolicy />} />
        <Route path="/kullanim-kosullari" element={<TermsAndConditions />} />
        <Route path="/mesafeli-satis-sozlesmesi" element={<DistanceSalesAgreement />} />
        <Route path="/musteri-hizmetleri" element={<CustomerServices />} />


      </Routes>
      <Footer></Footer>
    </div>


  )
}

export default App
// #6b6375 güzel bi renk