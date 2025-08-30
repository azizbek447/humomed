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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-white'>
      <HeaderInfo isScrolled={isScrolled} />
      <Header isScrolled={isScrolled} />

      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} mx-auto max-w-7xl gap-6 px-4 py-2 py-30 md:px-6 lg:px-8`}
      >
        <main className={`${isMobile ? 'order-1' : ''} w-full lg:w-[72%]`}>
          {!isHomePage && <Breadcrumbs />}
          {children}
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
