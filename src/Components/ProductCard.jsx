import { memo } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoTrash } from 'react-icons/io5';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({
  product,
  userCart,
  onAddToCart,
  onIncrement,
  onDecrement,
}) {
  const isExist = userCart.find(
    (item) => item.id === product.id && item.quantity > 0
  );

  const increment = (product) => {
    onIncrement(product);
  };

  const decrement = (product) => {
    onDecrement(product);
  };
  function handleAddToCart(product) {
    onAddToCart(product);
  }

  return (
    <div
      className="relative h-32 w-full overflow-hidden rounded-3xl bg-cover bg-center min-[400px]:h-40"
      style={{ backgroundImage: `url(${product.img})` }}
    >
      <div className="absolute z-[1] h-full w-full bg-gradient-to-b from-[rgba(104,104,104,0.14)] from-[45%] to-[rgba(241,146,21,0.77)] to-[100%]"></div>
      <div className="absolute bottom-0 left-0 z-[2] w-full items-center justify-between px-3 pb-3 text-white">
        <Link to="#">
          <h5 className="mb-0.5 truncate text-lg font-semibold">
            {product.title}
          </h5>
        </Link>
        <div className="flex items-center justify-between">
          <p>{product.price.toFixed(2)}$</p>
          {!isExist ? (
            <ProductCardButton
              icon={<FiPlus />}
              clickHandler={() => handleAddToCart(product)}
            />
          ) : (
            <div className="flex items-center justify-between gap-1">
              <ProductCardButton
                icon={isExist.quantity > 1 ? <FiMinus /> : <IoTrash />}
                clickHandler={() => decrement(product)}
              />
              <span className="text-base">{isExist.quantity}</span>
              <ProductCardButton
                icon={<FiPlus />}
                clickHandler={() => increment(product)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="absolute left-3 top-3 font-semibold text-white">
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {product.rate}
        </span>
      </div>
    </div>
  );
}

function ProductCardButton({ icon, clickHandler }) {
  return (
    <button
      className="flex size-8 items-center justify-center rounded-full border text-white"
      onClick={clickHandler}
    >
      {icon}
    </button>
  );
}

ProductCard.propTypes = {
  // title: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
  // rate: PropTypes.number.isRequired,
  // price: PropTypes.number.isRequired,
  product: PropTypes.object,
  userCart: PropTypes.array,
  onAddToCart: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

ProductCardButton.propTypes = {
  icon: PropTypes.element.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default memo(ProductCard);
