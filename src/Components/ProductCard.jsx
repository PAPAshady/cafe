import { useState } from 'react';
// import PrimaryBtn from './PrimaryBtn/PrimaryBtn';
import RatingStars from './RatingStars';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import PropTypes from 'prop-types';

export default function ProductCard({
  img,
  title,
  price,
  discountPrice,
  rating,
  popular,
}) {
  const [productNumber, setProductNumber] = useState(0);

  return (
    <div className="group/btn relative flex items-center justify-center overflow-hidden">
      <div className="relative flex w-full flex-col border border-primary bg-tertiary p-2">
        <Link to="#">
          <img loading="lazy" className="mx-auto size-[190px] pt-4" src={img} />
        </Link>
        <div className="flex flex-col px-4 py-6">
          <h2 className="mb-2 line-clamp-2 h-16 text-[1.3rem] font-[600] text-white duration-200 hover:text-primary">
            <Link to="#">{title}</Link>
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                {discountPrice && (
                  <span className="text-2xl text-neutral-600 line-through">
                    ${discountPrice}
                  </span>
                )}
                <span className="text-2xl text-primary">${price}</span>
              </div>
              <div className="mt-4 flex items-center gap-0.5 text-primary">
                <RatingStars rating={rating} />
              </div>
            </div>
            <div className="flex items-center bg-[#1a1f23] text-lg">
              <button
                onClick={() =>
                  setProductNumber((prev) => (prev ? prev - 1 : prev))
                }
                className="px-2 py-3 text-primary"
              >
                <FaMinus />
              </button>
              <span className="w-8 bg-transparent text-center text-white">
                {productNumber}
              </span>
              <button
                onClick={() =>
                  setProductNumber((prev) => (prev < 50 ? prev + 1 : prev))
                }
                className="px-2 py-3 text-primary"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <PrimaryBtn
        title="ADD TO CART"
        ParentClassName="absolute invisible opacity-0 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:visible"
        size="lg"
      /> */}
      {popular && (
        <span className="absolute -left-5 -top-5 flex size-[4.8rem] items-end justify-center rounded-full bg-primary pb-[1.2rem] pl-4 text-lg italic text-tertiary">
          Sale!
        </span>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  popular: PropTypes.bool,
};
