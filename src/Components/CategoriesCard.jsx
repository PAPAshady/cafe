import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CategoriesCard({ title, img, description }) {
  return (
    <div className="relative flex flex-col border border-primary bg-tertiary p-2 after:absolute after:inset-1/2 after:z-[-1] after:h-[105%] after:w-[90%] after:-translate-x-1/2 after:-translate-y-1/2 after:border after:border-primary-200 after:content-['']">
      <Link to="#">
        <img loading="lazy" className="mx-auto size-[190px] pt-4" src={img} alt="drinks" />
      </Link>
      <div className="px-4 py-6">
        <h2 className="mb-2 text-[1.4rem] font-[600] duration-200 hover:text-primary">
          <Link to="#">{title}</Link>
        </h2>
        <p className="text-sm font-[600] text-quaternary line-clamp-4">{description}</p>
      </div>
    </div>
  );
}

CategoriesCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
