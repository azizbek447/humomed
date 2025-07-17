import Footer from '../Footer';
import Header from '../Header';
import Sidebar from './Sidebar';
import { useWindowSize } from '../../hooks/useWindowSize';

const SectionalLayout = ({ children }) => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <div
        className={`flex w-full ${
          isMobile ? 'flex-col' : 'flex-row'
        } mx-auto max-w-[1280px] gap-6 px-4 py-6 md:px-6 lg:px-8`}
      >
        {/* MAIN */}
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
