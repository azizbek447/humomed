import { useState } from 'react';

import Modal2 from './components/modal/Modal2.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

const Layout = ({ children }) => {
  const [isModal2Open, setIsModal2Open] = useState(false);

  const handleOpenModal2 = () => setIsModal2Open(true);
  const handleCloseModal2 = () => setIsModal2Open(false);

  return (
    <div className='flex min-h-screen flex-col'>
      <Header onDemoClick={handleOpenModal2} />
      <main className='flex-grow'>{children}</main>
      <Footer />
      {isModal2Open && <Modal2 onClose={handleCloseModal2} />}
    </div>
  );
};

export default Layout;
