import PropTypes from 'prop-types';
import productImg from '../../assets/images/categories/categoryImg2.png';
import ProductCard from '../../Components/ProductCard';

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

  return (
    <div className="container text-quaternary">
      <div className="mx-auto flex max-w-[380px] flex-col gap-8 px-2 sm:m-0 sm:max-w-none md:flex-row-reverse md:gap-5 lg:mx-auto lg:max-w-[1024px] xl:m-0 xl:max-w-none">
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
        <div className="min-h-[300px] bg-slate-600 p-8 text-center text-3xl md:flex-[1.3] lg:flex-1">
          Filters
        </div>
      </div>
    </div>
  );
}

function ProductsSortBoxOption({ title, value }) {
  return (
    <option className="bg-secondary" value={value}>
      {title}
    </option>
  );
}

ProductsSortBoxOption.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
