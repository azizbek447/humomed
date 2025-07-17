import Footer from '../Footer.jsx';
import Header from '../innerLayout/Header';

const Index = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
