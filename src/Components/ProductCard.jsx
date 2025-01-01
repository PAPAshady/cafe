import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoTrash } from 'react-icons/io5';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProductCard({ title, img, rate, price }) {
  const [count, setCount] = useState(null);
  const increment = () => {
    setCount((prevCount) => (!prevCount ? 1 : prevCount + 1));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount ? prevCount - 1 : null));
  };

  return (
    <div
      className="relative h-32 w-full overflow-hidden rounded-3xl bg-cover bg-center min-[400px]:h-40"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute z-[1] h-full w-full bg-gradient-to-b from-[rgba(104,104,104,0.14)] from-[45%] to-[rgba(241,146,21,0.77)] to-[100%]"></div>
      <div className="absolute bottom-0 left-0 z-[2] w-full items-center justify-between px-3 pb-3 text-white">
        <Link to="#">
          <h5 className="mb-0.5 truncate text-base font-semibold min-[400px]:text-lg">
            {title}
          </h5>
        </Link>
        <div className="flex items-center justify-between">
          <p>{price.toFixed(2)}$</p>
          {!count ? (
            <button
              onClick={increment}
              className="flex size-8 items-center justify-center rounded-full border text-center"
            >
              <FiPlus />
            </button>
          ) : (
            <div className="flex items-center justify-between gap-1">
              <button
                className="flex size-8 items-center justify-center rounded-full border text-white"
                onClick={decrement}
              >
                {count > 1 ? <FiMinus /> : <IoTrash />}
              </button>
              <span className="text-base">{count}</span>
              <button
                className="flex size-8 items-center justify-center rounded-full border text-white"
                onClick={increment}
              >
                <FiPlus />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute left-3 top-3 font-semibold text-white">
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {rate}
        </span>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};