import PrimaryBtn from './PrimaryBtn/PrimaryBtn';
import RatingStars from './RatingStars';
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
            <RatingStars rating={rating} />
          </div>
        </div>
      </div>
      <PrimaryBtn
        title="ADD TO CART"
        ParentClassName="absolute invisible opacity-0 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:visible"
        size="lg"
      />
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
