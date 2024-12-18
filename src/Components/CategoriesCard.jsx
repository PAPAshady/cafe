import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import categoryImg from "../assets/images/categories/categoryImg1.png";

export default function CategoriesCard({ title, image, description }) {
  return (
    <div className="relative flex flex-col border border-primary bg-tertiary p-2 after:absolute after:inset-1/2 after:z-[-1] after:h-[105%] after:w-[90%] after:-translate-x-1/2 after:-translate-y-1/2 after:border after:border-primary-200 after:content-['']">
      <Link to="#">
        <img
          loading="lazy"
          className="mx-auto size-[190px] pt-4"
          // since backend currently can't provide image for categories, a static image will be shown for all categories
          src={image ? image : categoryImg}
          alt={title}
        />
      </Link>
      <div className="px-4 py-6">
        <h2 className="mb-2 text-[1.4rem] font-[600] duration-200 hover:text-primary">
          <Link to="#">{title}</Link>
        </h2>
        <p className="line-clamp-4 text-sm font-[600] text-quaternary">
          {description}
        </p>
      </div>
    </div>
  );
}

CategoriesCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
