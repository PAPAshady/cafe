import { cloneElement, useState } from 'react';
import { IoSearchOutline, IoTrash } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { categories, products } from '../../data';
import PropTypes from 'prop-types';
import 'swiper/css';

export default function Products() {
  return (
    <div className="container flex flex-col gap-8">
      <div className="flex items-center overflow-hidden rounded-full bg-white">
        <button className="p-2 text-2xl text-neutral-500">
          <IoSearchOutline />
        </button>
        <input
          className="flex-1 p-2 text-neutral-500 outline-none"
          type="text"
          placeholder="What are you looking for ?"
        />
      </div>

      <div>
        <Swiper
          slidesPerView="auto"
          spaceBetween="20"
          modules={[FreeMode]}
          freeMode
        >
          {categories.map((category) => {
            const styledIcon = cloneElement(category.icon, {
              className: 'text-2xl',
            });
            return (
              <SwiperSlide key={category.id} className="!w-auto">
                <button
                  className={`flex items-center gap-2 rounded-full border bg-gradient-to-l from-[3%] to-transparent to-[80%] ${category.isActive ? 'border-[#f19215]/75 from-[#f19215]/50 text-neutral-200' : 'border-neutral-300 from-neutral-700'} px-4 py-1 font-semibold`}
                >
                  {styledIcon}
                  <span>{category.title}</span>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* PRODUCT CARDS */}
      <div className="px-2 grid w-full grid-cols-2 items-center justify-center gap-5">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

function Product({ product }) {
  const [count, setCount] = useState(null);
  const increment = () => {
    setCount((prevCount) => (!prevCount ? 1 : prevCount + 1));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount ? prevCount - 1 : null));
  };

  return (
    <div
      className="relative h-52 w-full overflow-hidden rounded-3xl bg-cover"
      style={{ backgroundImage: `url(${product.img})` }}
    >
      <div className="absolute z-[1] h-full w-full bg-gradient-to-b from-[rgba(104,104,104,0.14)] from-[50%] to-[rgba(241,146,21,0.77)] to-[100%]"></div>
      <div className="absolute bottom-0 left-0 z-[2] grid w-full grid-cols-2 items-center justify-between px-3 pb-5 text-white">
        <h5 className="col-span-2 text-lg">{product.title}</h5>
        <p className="">{(product.price).toFixed(2)}$</p>
        {!count ? (
          <button
            onClick={increment}
            className="ml-auto flex size-8 items-center justify-center rounded-full border text-center text-lg"
          >
            +
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <button
              className="flex size-8 items-center justify-center rounded-full border text-lg text-white"
              onClick={decrement}
            >
              {count > 1 ? '-' : <IoTrash />}
            </button>
            <span className="text-base">{count}</span>
            <button
              className="flex size-8 items-center justify-center rounded-full border text-lg text-white"
              onClick={increment}
            >
              +
            </button>
          </div>
        )}
      </div>
      <div className="absolute left-3 top-3 font-semibold text-white">
        <span>⭐{product.rate}</span>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
