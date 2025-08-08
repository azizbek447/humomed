import { useEffect, useState } from 'react';
import ScrollToTopButton from 'root/components/ScrollToTopButton';

import ScrollToTop from '../components/ScrollToTop.jsx';
import Footer from './Footer';
import Header from './Header';
import HeaderInfo from './HeaderInfo';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let throttleTimeout = null;

    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
        throttleTimeout = null;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem('scrollPos', window.scrollY);
    };

    window.addEventListener('beforeunload', saveScrollPosition);

    const pos = localStorage.getItem('scrollPos');
    if (pos) {
      window.scrollTo(0, parseInt(pos, 10));
    }

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  return (
    <div className='min-h-screen'>
      <HeaderInfo isScrolled={isScrolled} />
      <Header isScrolled={isScrolled} />
      {children}
      <Footer />
      <ScrollToTopButton />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
