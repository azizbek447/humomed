<<<<<<< HEAD
=======
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

>>>>>>> ec83732 (Bo'lim yangilandi)
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from './Sidebar';
import { useWindowSize } from '../../hooks/useWindowSize';

const SectionalLayout = ({ children }) => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;
<<<<<<< HEAD
=======
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
>>>>>>> ec83732 (Bo'lim yangilandi)

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <div
        className={`flex w-full ${
          isMobile ? 'flex-col' : 'flex-row'
<<<<<<< HEAD
        } mx-auto max-w-[1280px] gap-6 px-4 py-6 md:px-6 lg:px-8`}
      >
        {/* MAIN */}
=======
        } mx-auto max-w-7xl gap-6 px-4 py-6 md:px-6 lg:px-8`}
      >
>>>>>>> ec83732 (Bo'lim yangilandi)
        <main className={`${isMobile ? 'order-1' : ''} w-full lg:w-[72%]`}>
          <div className='w-full'>{children}</div>
        </main>

        {/* SIDEBAR */}
        <aside className={`${isMobile ? 'order-2' : ''} w-full lg:w-[28%]`}>
          <Sidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default SectionalLayout;
