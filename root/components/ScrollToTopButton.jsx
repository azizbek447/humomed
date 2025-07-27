import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 
      rounded-full bg-[var(--success-strong)] 
      p-3 sm:p-4 md:p-5 lg:p-6 
      text-white shadow-lg transition duration-300 
      hover:bg-[var(--success-strong)] hover:shadow-xl hover:shadow-blue-400 
      ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <FaArrowUp className='h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:rotate-[360deg]' />
    </button>
  );
};

export default ScrollToTopButton;
