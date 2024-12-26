import { memo } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { FaRegTrashCan } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function CartProduct({ title, img, href, price, quantity, status }) {
  const statusColors = {
    'on hold': 'text-[#7c8083]',
    preparing: 'text-[#ffb800]',
    delivered: 'text-[#22c55e]',
    cancelled: 'text-[#ef4444]',
  };

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
          <div className="flex items-center gap-3">
            <p className="mt-2 flex items-center text-lg">
              {quantity}
              <IoClose className="pt-1 text-sm" />
              <span className="text-primary-600"> ${price}</span>
            </p>
            |
            <p className={`pt-1 text-sm capitalize ${statusColors[status]}`}>
              {status}
            </p>
          </div>
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
  status: PropTypes.string.isRequired,
};

export default memo(CartProduct);
