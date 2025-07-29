import { useEffect, useState } from 'react';
import ScrollToTopButton from 'root/components/ScrollToTopButton';

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
      }, 200); // scroll eventni 200ms da bir ishlatadi
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  return (
    <div className='min-h-screen'>
      <HeaderInfo isScrolled={isScrolled} />
      <Header isScrolled={isScrolled} />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
