import PropTypes from 'prop-types';
import productImg from '../../assets/images/categories/categoryImg2.png';
import ProductCard from '../../Components/ProductCard';
import { IoSearchOutline, IoChevronForward } from 'react-icons/io5';
import DualThumbSlider from '../../Components/DualThumbSlider';
import { Link } from 'react-router-dom';

export default function Products() {
  const productsSortingOptions = [
    { id: 1, title: 'Sort by popularity', value: 'popular' },
    { id: 2, title: 'Sort by avarage rating', value: 'rating' },
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

  return (
    <div className="container text-quaternary">
      <div className="mx-auto flex max-w-[380px] flex-col gap-x-8 px-2 sm:m-0 sm:max-w-none md:flex-row-reverse md:gap-x-6 lg:mx-auto lg:max-w-[1024px] xl:m-0 xl:max-w-none">
        <div className="md:flex-[3]">
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
        <div className="flex flex-col gap-12 pt-16 sm:mx-auto sm:w-[80%] md:m-0 md:w-full md:flex-[1.3] lg:flex-1">
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
            <p className="mb-6 flex items-center justify-center gap-3 text-xl text-primary">
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
          <div>
            <p className="mb-6 flex items-center justify-center gap-3 text-xl text-primary">
              <span className="seperator"></span>
              <span>Price Range</span>
              <span className="seperator"></span>
            </p>

            <DualThumbSlider />
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

CategoryLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ProductsSortBoxOption.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
