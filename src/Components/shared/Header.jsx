import { cloneElement, memo } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {
  IoSearch,
  IoHomeOutline,
  IoFastFoodOutline,
  IoImagesOutline,
} from 'react-icons/io5';
import { FaHeadphones } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default memo(function Header() {
  const mobileNavbarLinks = [
    {
      id: 1,
      title: 'Cart',
      icon: <FiShoppingCart />,
      href: '/cart',
    },
    {
      id: 2,
      title: 'Support',
      icon: <FaHeadphones />,
      href: '/support',
    },
    {
      id: 3,
      title: 'Home',
      icon: <IoHomeOutline />,
      href: '/',
    },
    {
      id: 4,
      title: 'Menu',
      icon: <IoFastFoodOutline />,
      href: '/categories',
    },
    {
      id: 5,
      title: 'Gallery',
      icon: <IoImagesOutline />,
      href: '/gallery',
    },
  ];

  const desktopNavbarLinks = [
    { id: 1, title: 'HOME', href: '/' },
    { id: 2, title: 'MENU', href: '/categories' },
    { id: 3, title: 'ABOUT US', href: '/about-us' },
    { id: 4, title: 'GALLERY', href: '/gallery' },
    { id: 5, title: 'SUPPORT', href: '/support' },
  ];

  return (
    <>
      <header className="sticky top-0 z-10 bg-tertiary p-3">
        {/* mobile header */}
        <div className="container flex items-center justify-between text-white lg:hidden">
          <Link to="#" className="text-2xl">
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
      </header>

      <nav className="fixed bottom-0 z-[5] flex w-full items-center justify-center border border-secondary bg-tertiary text-white lg:hidden">
        {mobileNavbarLinks.map((link) => (
          <MobileNavLink key={link.id} {...link} />
        ))}
      </nav>
    </>
  );
});

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
