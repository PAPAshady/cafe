import { NavLink } from "react-router-dom";
import bannerBackground from "../../assets/images/banner-bg.jpg";

export default function Banner() {
  return (
    <div
      className="h-[250px] bg-cover bg-[bottom_center] bg-no-repeat"
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      <div className="container flex h-full flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:px-4">
        <h1 className="text-2xl text-white">Categories</h1>
        <div className="flex items-center gap-3 text-sm font-[700] text-white md:text-base">
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-primary transition-colors"}`
            }
            to="/"
          >
            HOME
          </NavLink>
          <span className="seperator"></span>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-primary transition-colors"}`
            }
            to="/categories"
          >
            CATEGORIES
          </NavLink>
        </div>
      </div>
    </div>
  );
}
