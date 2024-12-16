import CategoryImg1 from "../../assets/images/categories/categoryImg1.png";
import CategoryImg2 from "../../assets/images/categories/categoryImg2.png";
import CategoryImg3 from "../../assets/images/categories/categoryImg3.png";
import CategoryImg4 from "../../assets/images/categories/categoryImg4.png";
import { IoFilterSharp } from "react-icons/io5";
import CategoriesCard from "../../Components/CategoriesCard";

function Categories() {
  const categories = [
    {
      id: 1,
      title: "Hearty Soups to Warm Your Soul",
      img: CategoryImg1,
      description:
        "Warm up with our hearty soups, made fresh daily with rich flavors and wholesome ingredients, perfect for a cozy meal",
    },
    {
      id: 2,
      title: "Decadent Desserts for Every Sweet Tooth",
      img: CategoryImg2,
      description:
        "Indulge in our delightful desserts, featuring a variety of sweet treats from decadent cakes to creamy pastries, perfect for satisfying your cravings.",
    },
    {
      id: 3,
      title: "Fresh and Flavorful Vegan Delights",
      img: CategoryImg3,
      description:
        "Discover our delicious vegan options, crafted with fresh, plant-based ingredients for a wholesome and flavorful dining experience.",
    },
    {
      id: 4,
      title: "Chilled Refreshments for Every Mood",
      img: CategoryImg4,
      description:
        "Chill out with our refreshing cold beverages, from iced coffees to fruity smoothies and iced teas, perfect for any time of the day.",
    },
  ];

  return (
    <div className="container text-quaternary">
      <div className="items-center justify-between px-4 sm:flex sm:px-8">
        <p className="mb-8 text-center sm:m-0">Showing 1–4 of 12 results</p>
        <button className="mx-auto flex w-[200px] items-center justify-center gap-4 bg-primary p-2 text-lg font-[600] text-white duration-300 hover:bg-secondary sm:m-0">
          Filters
          <IoFilterSharp />
        </button>
      </div>

      <div className="mx-auto mt-2 grid max-w-[400px] grid-cols-1 gap-x-10 gap-y-16 px-2 py-12 sm:max-w-[600px] sm:grid-cols-2 md:max-w-[720px]">
        {categories.map((category) => (
          <CategoriesCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
