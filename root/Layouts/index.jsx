import { useEffect, useState } from 'react';
import ScrollToTopButton from 'root/components/ScrollToTopButton';

import ScrollToTop from '../components/ScrollToTop.jsx';
import Footer from './Footer';
import Header from './Header';
import HeaderInfo from './HeaderInfo';

if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        localStorage.removeItem('scrollPosition');
      }, 50);
    }

    const handleBeforeUnload = () => {
      localStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
