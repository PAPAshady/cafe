import { useEffect, useState, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import routes from '../../router';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import CartProduct from '../CartProduct';
import { GoArrowUp } from 'react-icons/go';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import productImg1 from '../../assets/images/categories/categoryImg1.png';
import productImg2 from '../../assets/images/categories/categoryImg2.png';
import productImg3 from '../../assets/images/categories/categoryImg3.png';

export default function Layout() {
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isValidRoute = routes[0].children.some(
    (route) => route.path === pathname
  );

  const cartProducts = [
    {
      id: 1,
      title: 'Thai Seafood and Vegetable Soup',
      price: 39.0,
      img: productImg1,
      href: '#',
      quantity: 3,
    },
    {
      id: 2,
      title: 'Asian Spicey Chicken Wings',
      price: 59.0,
      img: productImg2,
      href: '#',
      quantity: 2,
    },
    {
      id: 3,
      title: 'French Cretam Pumpkin Soup',
      price: 30.0,
      img: productImg3,
      href: '#',
      quantity: 1,
    },
    {
      id: 4,
      title: 'King Prawns with Delicate Wine Sauce',
      price: 59.0,
      img: productImg1,
      href: '#',
      quantity: 2,
    },
  ];

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTopBtn(true);
    } else {
      setShowScrollTopBtn(false);
    }
  };

  const openCartHandler = useCallback(() => setShowCart(true), []);

  const closeCartHandler = useCallback((e) => {
    e.target === e.currentTarget && setShowCart(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col text-quaternary">
      <Header openCartHandler={openCartHandler} />
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

      {/* Shopping cart Dropdown */}
      <div
        className={`fixed flex h-full w-full items-start justify-end bg-[rgba(0,0,0,.5)] p-5 transition-all duration-300 ${showCart ? 'visible z-20 opacity-100' : 'invisible z-[-1] opacity-0'}`}
        onClick={closeCartHandler}
      >
        <div
          className={`absolute top-7 flex max-h-[600px] w-[375px] flex-col border border-primary bg-tertiary p-4 transition-all duration-1000 ${showCart ? 'right-8' : '-right-[70%]'}`}
        >
          <div className="flex flex-1 flex-col gap-8 overflow-y-auto p-5">
            {cartProducts.map((product) => (
              <CartProduct key={product.id} {...product} />
            ))}
          </div>
          <div className="border-t border-secondary px-4 py-5">
            <p className="mb-6 text-2xl font-thin text-white">
              Total: <span className="text-primary">$359.00</span>
            </p>
            <PrimaryBtn
              title="CHECKOUT"
              href="/cart"
              ParentClassName="w-full mx-auto"
              titleClassName="w-full text-center text-base py-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
