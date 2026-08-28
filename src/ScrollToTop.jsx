import { useLayoutEffect, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, state } = useLocation();
  const scrollPositions = useRef({});

  // 1. Kullanıcı sayfayı kaydırdıkça anlık konumu hafızada güncel tutalım
  useEffect(() => {
    const handleScroll = () => {
      // Sadece kullanıcı gerçekten sayfayı kaydırırken konumu kaydet
      scrollPositions.current[window.location.pathname] = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. useLayoutEffect: Tarayıcı ekranı boyamadan HEMEN ÖNCE çalışır.
  // Bu sayede 1 saliselik yukarı gidip gelme (sıçrama) görüntüsü tamamen engellenir.
  useLayoutEffect(() => {
    if (state?.keepPosition) {
      const savedPosition = scrollPositions.current[pathname] || 0;
      
      // Eğer zaten o konumdaysak tarayıcıyı zorlama (sıçramayı önler)
      if (window.scrollY !== savedPosition) {
        window.scrollTo(0, savedPosition);
      }
    } else {
      // Eğer en üstten başlaması gerekiyorsa ve zaten en üstte değilsek yukarı çek
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, state]);

  return null;
}

export default ScrollToTop