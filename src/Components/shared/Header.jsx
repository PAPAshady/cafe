import { cloneElement, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import productImg from '../../assets/images/categories/categoryImg2.png';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartModal from './CartModal';
import { mobileNavbarLinks, desktopNavbarLinks } from '../../data';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userCart, setUserCart] = useState([
    {
      id: 1,
      title: 'Asian Spicy Chicken  Wings',
      img: productImg,
      price: 59.0,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Franch Cretam Pumpkin Soup',
      img: productImg,
      price: 30.0,
      discountPrice: 49.99,
      quantity: 1,
    },
    {
      id: 3,
      title: 'King Prawns with  Delicate Wine Sauce',
      img: productImg,
      price: 52.0,
      quantity: 1,
    },
  ]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updateQuantity = (id, amount) => {
    setUserCart((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity)
    );
  };

  const clearCart = () => {
    setUserCart([]);
  };

  return (
    <>
      <header className="relative bg-tertiary p-3">
        {/* mobile header */}
        <div className="container flex items-center justify-between text-white lg:hidden">
          <Link to="#" className="text-2xl" onClick={toggleModal}>
            <FiShoppingCart />
          </Link>

          <Link to="/" className="text-xl font-semibold text-primary">
            LOGO
          </Link>

          <Link to="#" className="text-2xl">
            <IoSearch />
          </Link>
        </div>
        {/* desktop header */}
        <div className="container hidden items-center justify-between py-4 lg:flex">
          <Link className="text-2xl font-semibold text-primary" to="/">
            LOGO
          </Link>

          <div className="flex items-center gap-12 pl-8 text-white xl:pl-20">
            {desktopNavbarLinks.map((link) => (
              <DesktopNavLink key={link.id} {...link} />
            ))}
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-8 text-2xl text-white">
              <Link to="#" className="duration-300 hover:text-primary">
                <FiShoppingCart />
              </Link>

              <Link to="#" className="duration-300 hover:text-primary">
                <IoSearch />
              </Link>
            </div>
            <button className="bg-primary px-10 py-3 font-semibold text-white transition-colors duration-300 hover:bg-secondary">
              ORDER
            </button>
          </div>
        </div>
        {/* modal */}
        <CartModal
          isOpen={isModalOpen}
          userCart={userCart}
          toggleModal={toggleModal}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      </header>

      <nav className="fixed bottom-0 z-[5] flex w-full items-center justify-center border border-secondary bg-tertiary text-white lg:hidden">
        {mobileNavbarLinks.map((link) => (
          <MobileNavLink key={link.id} {...link} />
        ))}
      </nav>
    </>
  );
}

function MobileNavLink({ title, icon, href }) {
  const styledIcon = cloneElement(icon, { className: 'text-2xl' });
  return (
    <NavLink
      className={({ isActive }) =>
        `flex flex-1 flex-col items-center gap-1.5 py-3 text-[.8rem] font-semibold duration-200 ${isActive && 'text-primary'}`
      }
      to={href}
    >
      {styledIcon}
      {title}
    </NavLink>
  );
}

function DesktopNavLink({ title, href }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `group relative flex flex-col items-center text-sm font-bold transition-colors hover:text-primary ${isActive && 'text-primary'}`
      }
      to={href}
    >
      {({ isActive }) => (
        <>
          {title}
          <span
            className={`seperator group-hover:opacity-1 absolute top-[140%] transition-all ${isActive ? 'opacity-1' : 'opacity-0'}`}
          ></span>
        </>
      )}
    </NavLink>
  );
}

MobileNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

DesktopNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
