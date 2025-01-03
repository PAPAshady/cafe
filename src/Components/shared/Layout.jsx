import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { GoArrowUp } from 'react-icons/go';

export default function Layout() {
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTopBtn(true);
    } else {
      setShowScrollTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main
        className={`${!isHomePage && 'mt-14'} mb-32 flex-1 text-quaternary`}
      >
        <Outlet />
      </main>
      <Footer />
      <button
        className={`${showScrollTopBtn ? 'visible bottom-28 opacity-100 lg:bottom-16' : 'invisible bottom-4 opacity-0 lg:bottom-4'} fixed bottom-28 right-8 z-10 flex size-9 items-center justify-center rounded-full border border-primary text-2xl text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:bottom-16`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <GoArrowUp />
      </button>
    </div>
  );
}
