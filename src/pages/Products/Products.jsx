import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import PropTypes from 'prop-types';
import ProductCard from '../../Components/ProductCard';
import RatingStars from '../../Components/RatingStars';
import { IoSearchOutline, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {
  productsSortingOptions,
  products,
  categoryLinks,
  tags,
} from '../../data';

export default function Products() {
  const [values, setValues] = useState([50, 80]); // Default Values for price range slider

  return (
    <div className="container text-quaternary">
      <div className="mx-auto flex max-w-[380px] flex-col gap-x-8 px-2 sm:m-0 sm:max-w-none md:flex-row-reverse md:gap-x-6 lg:mx-auto lg:max-w-[1024px] lg:gap-12 xl:m-0 xl:max-w-none">
        <div className="md:flex-[3] lg:flex-[4] xl:flex-[5]">
          <div className="flex flex-col items-end sm:flex-row sm:items-center sm:justify-between">
            <p className="mb-8 text-end text-sm font-semibold text-white sm:m-0">
              Showing 1–9 of 12 results
            </p>
            <select className="w-full max-w-[250px] border-b border-primary bg-transparent py-3 text-sm text-white">
              <option
                className="bg-secondary"
                defaultValue="popular"
                value="-1"
              >
                Default sorting
              </option>
              {productsSortingOptions.map((option) => (
                <ProductsSortBoxOption key={option.id} {...option} />
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-16 sm:grid-cols-2 md:gap-x-4 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 pt-16 sm:mx-auto sm:w-[80%] md:m-0 md:w-full md:flex-[1.3]">
          <div className="flex border-b">
            <input
              className="w-full bg-transparent py-3 outline-none"
              type="text"
              placeholder="Search Products..."
            />
            <button className="p-2">
              <IoSearchOutline className="size-[25px]" />
            </button>
          </div>
          <div>
            <p className="mb-8 flex items-center justify-center gap-3 text-xl text-primary">
              <span className="seperator"></span>
              <span>Categories</span>
              <span className="seperator"></span>
            </p>
            <ul>
              {categoryLinks.map((category) => (
                <CategoryLink key={category.id} {...category} />
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <p className="mb-8 flex items-center justify-center gap-3 text-xl text-primary">
              <span className="seperator"></span>
              <span>Price Range</span>
              <span className="seperator"></span>
            </p>

            <div className="mx-auto flex max-w-[350px] flex-col items-center">
              <Range
                values={values}
                step={1}
                min={10}
                max={120}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className="flex h-[36px] w-full"
                  >
                    <div
                      ref={props.ref}
                      className="h-[3px] w-full self-center"
                      style={{
                        background: getTrackBackground({
                          values,
                          colors: ['#222D3B', '#C19977', '#222D3B'],
                          min: 10,
                          max: 120,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div {...props} key={props.key} className="outline-none">
                    <div
                      className={`${isDragged ? 'rotate-[135deg]' : 'rotate-45'} relative grid size-[16px] place-items-center border border-primary transition-all duration-300`}
                    >
                      <div className="size-[65%] bg-primary"></div>
                    </div>
                  </div>
                )}
              />
              <div className="mt-3 flex w-full items-center justify-between">
                <p className="text-lg font-semibold md:text-base">
                  Price: ${Math.floor(values[0])} — ${Math.floor(values[1])}
                </p>
                <button className="border border-primary px-3 py-1 font-semibold italic transition-colors duration-300 hover:bg-primary hover:text-white">
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-8 flex items-center justify-center gap-3 text-xl text-primary">
              <span className="seperator"></span>
              <span>Tags</span>
              <span className="seperator"></span>
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <Tag key={tag.id} {...tag} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-8 flex items-center justify-center gap-3 text-xl text-primary">
              <span className="seperator"></span>
              <span>Best Sellers</span>
              <span className="seperator"></span>
            </p>

            <div className="flex flex-col gap-5">
              {products.slice(0, 3).map((product) => (
                <BestSellerProduct key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryLink({ href, title }) {
  return (
    <li className="mb-4">
      <Link
        to={href}
        className="group flex items-center gap-0.5 text-[1.1rem] text-white transition-all duration-[350ms] hover:gap-1.5 hover:text-primary"
      >
        <IoChevronForward className="text-sm transition-colors duration-[350ms] group-hover:text-primary" />
        {title}
      </Link>
    </li>
  );
}

function ProductsSortBoxOption({ title, value }) {
  return (
    <option className="bg-secondary" value={value}>
      {title}
    </option>
  );
}

function Tag({ title }) {
  return (
    <span className="cursor-pointer border border-secondary bg-secondary px-3 py-1 text-white transition-colors duration-300 hover:border-primary">
      {title}
    </span>
  );
}

function BestSellerProduct({ title, img, price, rating }) {
  return (
    <div className="flex items-center gap-4">
      <img src={img} className="size-[80px] md:size-[75px]" alt={title} />
      <div className="flex flex-col gap-1.5">
        <h2 className="line-clamp-2 text-white transition-colors duration-300 hover:text-primary">
          <Link href="#">{title}</Link>
        </h2>
        <div className="flex items-center gap-0.5 text-xs text-primary">
          <RatingStars rating={rating} />
        </div>
        <span className="text-primary">${price}</span>
      </div>
    </div>
  );
}

CategoryLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ProductsSortBoxOption.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

BestSellerProduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
