import ScrollToTop from 'root/components/ScrollToTop.jsx';
import Footer from '../Footer.jsx';
import Header from '../innerLayout/Header';
import ScrollToTopButton from 'root/components/ScrollToTopButton.jsx';

const Index = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Header />

      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
