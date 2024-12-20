import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import PrimaryBtn from './PrimaryBtn/PrimaryBtn';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProductCard({ img, title, price, rating }) {
  return (
    <div className="group/btn relative flex items-center justify-center">
      <div className="flex w-full flex-col border border-primary bg-tertiary p-2">
        <Link to="#">
          <img loading="lazy" className="mx-auto size-[190px] pt-4" src={img} />
        </Link>
        <div className="flex flex-col px-4 py-6">
          <h2 className="mb-2 line-clamp-2 h-16 text-[1.3rem] font-[600] text-white duration-200 hover:text-primary">
            <Link to="#">{title}</Link>
          </h2>
          <span className="text-2xl text-primary">${price}</span>
          <div className="mt-4 flex items-center gap-0.5 text-primary">
            <Stars rating={rating} />
          </div>
        </div>
      </div>
      <PrimaryBtn
        title="ADD TO CART"
        ParentClassName="absolute invisible opacity-0 transotion-all duration-300 group-hover/btn:opacity-100 group-hover/btn:visible"
        size="lg"
      />
    </div>
  );
}

// Calculates and renders star icons based on rating number.
function Stars({ rating }) {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check for half-star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <>
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <IoStar key={`full-${index}`} />
        ))}
      {hasHalfStar && <IoStarHalf key="half" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <IoStarOutline key={`empty-${index}`} />
        ))}
    </>
  );
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
