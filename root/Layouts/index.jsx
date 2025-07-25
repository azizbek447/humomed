import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import HeaderInfo from './HeaderInfo';
import ScrollToTopButton from 'root/components/ScrollToTopButton';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <HeaderInfo isScrolled={isScrolled} />
      <Header isScrolled={isScrolled} />
      
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
