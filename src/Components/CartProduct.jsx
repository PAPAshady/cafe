import { memo } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { FaRegTrashCan } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function CartProduct({ title, img, href, price, quantity }) {
  return (
    <div className="flex items-center">
      <Link className="me-4 block size-[80px]" to={href}>
        <img src={img} alt={title} className="size-full" />
      </Link>
      <div className="flex flex-1">
        <div>
          <Link
            className="line-clamp-2 text-white transition-colors hover:text-primary"
            to={href}
          >
            {title}
          </Link>
          <p className="mt-2 flex items-center text-lg">
            {quantity}
            <IoClose className="pt-1 text-sm" />
            <span className="text-primary-600"> ${price}</span>
          </p>
        </div>
      </div>
      <button className="px-1 py-4 text-lg transition-colors duration-300 hover:text-red-500">
        <FaRegTrashCan />
      </button>
    </div>
  );
}

CartProduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

const MemoizedCartProduct = memo(CartProduct);

export default MemoizedCartProduct;
