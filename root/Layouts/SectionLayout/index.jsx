import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from 'root/components/ScrollToTop';
import ScrollToTopButton from 'root/components/ScrollToTopButton';

import Breadcrumbs from '../../components/Breadcrumb';
import { useWindowSize } from '../../hooks/useWindowSize';
import Footer from '../Footer';
import Header from '../Header';
import HeaderInfo from '../HeaderInfo';
import Sidebar from './Sidebar';

const SectionalLayout = ({ children }) => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔹 Header scroll shadow uchun
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className='flex min-h-screen flex-col'>
      <HeaderInfo isScrolled={isScrolled} />
      <Header isScrolled={isScrolled} />

      <div
        className={`flex w-full ${
          isMobile ? 'flex-col' : 'flex-row'
        } mx-auto max-w-7xl gap-6 px-4 py-6 md:px-6 lg:px-8`}
      >
        <main className={`${isMobile ? 'order-1' : ''} w-full pt-35 lg:w-[72%]`}>
          {!isHomePage && <Breadcrumbs />}
          <div className='w-full'>{children}</div>
        </main>

        <aside className={`${isMobile ? 'order-2' : ''} w-full lg:w-[28%]`}>
          <Sidebar />
        </aside>
      </div>

      <Footer />
      <ScrollToTop />
      <ScrollToTopButton />
    </div>
  );
};

export default SectionalLayout;
