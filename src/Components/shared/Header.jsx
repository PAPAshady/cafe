import { FiShoppingCart } from "react-icons/fi";
import {
  IoSearch,
  IoHomeOutline,
  IoFastFoodOutline,
  IoImagesOutline,
} from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const mobileNavbarLinks = [
    {
      id: 1,
      title: "Cart",
      icon: <FiShoppingCart className="text-2xl" />,
      href: "/cart",
    },
    {
      id: 2,
      title: "Support",
      icon: <FaHeadphones className="text-2xl" />,
      href: "/support",
    },
    {
      id: 3,
      title: "Home",
      icon: <IoHomeOutline className="text-2xl" />,
      href: "/",
    },
    {
      id: 4,
      title: "Menu",
      icon: <IoFastFoodOutline className="text-2xl" />,
      href: "/categories",
    },
    {
      id: 5,
      title: "Gallery",
      icon: <IoImagesOutline className="text-2xl" />,
      href: "/gallery",
    },
  ];

  return (
    <>
      <header className="bg-tertiary p-3">
        <div className="container flex items-center justify-between text-white">
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
      </header>

      <nav className="fixed bottom-0 z-[5] flex w-full items-center justify-center border border-secondary bg-tertiary text-white">
        {mobileNavbarLinks.map((link) => (
          <MobileNavLink key={link.id} {...link} />
        ))}
      </nav>
    </>
  );
}

function MobileNavLink({ title, icon, href }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex flex-col items-center gap-1.5 py-3 text-[.8rem] flex-1 font-semibold duration-200 ${isActive && "text-primary"}`
      }
      to={href}
    >
      {icon}
      {title}
    </NavLink>
  );
}
