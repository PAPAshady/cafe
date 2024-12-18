import { useEffect } from "react";
import { IoFilterSharp } from "react-icons/io5";
import CategoriesCard from "../../Components/CategoriesCard";
import useFetch from "../../Hooks/useFetch";

function Categories() {
  const { data: categories, error, sendRequest } = useFetch("categories");

  useEffect(() => {
    sendRequest();
  }, []);

  if (error) {
    return (
      <p className="p-4 text-quaternary">
        Failed to load categories. Please try again.
      </p>
    );
  }

  return (
    <div className="container text-quaternary">
      {categories ? (
        <>
          <div className="items-center justify-between px-4 sm:flex sm:px-8">
            <p className="mb-8 text-center sm:m-0">Showing 1–4 of 12 results</p>
            <button className="mx-auto flex w-[200px] items-center justify-center gap-4 bg-primary p-2 text-lg font-[600] text-white duration-300 hover:bg-secondary sm:m-0">
              Filters
              <IoFilterSharp />
            </button>
          </div>

          <div className="mx-auto mt-2 grid max-w-[400px] grid-cols-1 gap-x-10 gap-y-16 px-2 py-12 sm:max-w-[600px] sm:grid-cols-2 md:max-w-[720px]">
            {categories.map((category) => (
              <CategoriesCard key={category._id} {...category} />
            ))}
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Categories;
