import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import PropTypes from 'prop-types';
import productImg from '../../assets/images/categories/categoryImg2.png';
import ProductCard from '../../Components/ProductCard';
import { IoSearchOutline, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Products() {
  const [values, setValues] = useState([50, 80]); // Default Values for price range slider

  const productsSortingOptions = [
    { id: 1, title: 'Sort by popularity', value: 'popular' },
    { id: 2, title: 'Sort by average rating', value: 'rating' },
    { id: 3, title: 'Sort by latest', value: 'latest' },
  ];

  const products = [
    {
      id: 1,
      title: 'Asian Spicy Chicken  Wings',
      img: productImg,
      price: 59.0,
      rating: 5,
    },
    {
      id: 2,
      title: 'Franch Cretam Pumpkin Soup',
      img: productImg,
      price: 30.0,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'King Prawns with  Delicate Wine Sauce',
      img: productImg,
      price: 52.0,
      rating: 3.5,
    },
  ];

  const categoryLinks = [
    { id: 1, title: 'Deserts', href: '/categories?cat=deserts' },
    { id: 2, title: 'Healthy Food', href: '/categories?cat=deserts' },
    { id: 3, title: 'Main Dishes', href: '/categories?cat=main' },
    { id: 4, title: 'Snacks', href: '/categories?cat=snack' },
  ];

  const tags = [
    { id: 1, title: 'Cocktail' },
    { id: 2, title: 'Coffee' },
    { id: 3, title: 'Deserts' },
    { id: 4, title: 'Food' },
    { id: 5, title: 'Menu' },
    { id: 6, title: 'Recipes' },
    { id: 7, title: 'Restaurant' },
    { id: 8, title: 'Vegan menu' },
  ];

  return (
    <div className="container text-quaternary">
      <div className="mx-auto flex max-w-[380px] flex-col gap-x-8 px-2 sm:m-0 sm:max-w-none md:flex-row-reverse md:gap-x-6 lg:mx-auto lg:max-w-[1024px] lg:gap-12 xl:m-0 xl:max-w-none">
        <div className="md:flex-[3] lg:flex-[3.5]">
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

CategoryLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ProductsSortBoxOption.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
