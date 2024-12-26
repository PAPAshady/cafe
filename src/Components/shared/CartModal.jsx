// import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoTrashBin } from 'react-icons/io5';
// import React from 'react';
// import productImg from '../../assets/images/categories/categoryImg2.png';

export default function CartModal({
  isOpen,
  userCart,
  toggleModal,
  updateQuantity,
  clearCart,
}) {
  const totalPrice = userCart.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50 flex items-center justify-center bg-black bg-opacity-50 text-white"
      onClick={toggleModal}
    >
      <div
        className="w-96 rounded bg-secondary p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-end justify-between">
          <h2 className="mb-4 text-lg font-bold">Cart Bag</h2>
          <button onClick={clearCart}>CLEAR CART</button>
        </div>
        {userCart.length > 0 ? (
          <div>
            {/* Cart Items List */}
            <ul>
              {userCart.map((item) => (
                <li
                  key={item.id}
                  className="mb-4 flex items-center justify-between border-b pb-2"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-12 w-12 rounded"
                  />
                  <div className="mx-4 flex-1">
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{item.price} $</p>
                      <div className="flex items-center justify-between gap-3 rounded-full bg-black p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex size-7 items-center justify-center rounded-full border"
                        >
                          {item.quantity == 1 ? <IoTrashBin /> : '-'}
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex size-7 items-center justify-center rounded-full border"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Total Price */}
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Total :</h3>
              <p className="text-lg font-bold">
                {totalPrice.toLocaleString()} $
              </p>
            </div>
            {/* Buy Button */}
            <button
              className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white"
              onClick={toggleModal}
            >
              Order
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        )}
      </div>
    </div>
  );
}

CartModal.proptype = {
  isOpen: PropTypes.bool.isRequired,
  userCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};
