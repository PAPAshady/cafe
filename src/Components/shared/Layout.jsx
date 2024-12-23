import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import routes from '../../router';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import { GoArrowUp } from 'react-icons/go';

export default function Layout() {
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isValidRoute = routes[0].children.some(
    (route) => route.path === pathname
  );

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
      {!isHomePage && isValidRoute && <Banner />}
      <main
        className={`${!isHomePage && 'mt-14'} mb-32 flex-1 text-quaternary`}
      >
        <Outlet />
      </main>
      <Footer />
      <button
        className={`${showScrollTopBtn ? 'bottom-28 opacity-100 lg:bottom-16' : 'bottom-4 opacity-0 lg:bottom-4'} fixed bottom-28 right-8 flex size-9 items-center justify-center rounded-full border border-primary text-2xl text-primary transition-all duration-300 hover:border-quaternary hover:text-quaternary lg:bottom-16`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <GoArrowUp />
      </button>
    </div>
  );
}
