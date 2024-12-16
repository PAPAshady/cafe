import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container bg-tertiary px-4 py-3">
      <div className="flex items-center justify-between text-white">
        <Link to="#" className="text-2xl">
          <FiShoppingCart />
        </Link>

        <Link to="/" className="font-semibold text-xl text-primary">LOGO</Link>

        <Link to="#" className="text-2xl">
          <IoSearch />
        </Link>
      </div>
    </header>
  );
}
