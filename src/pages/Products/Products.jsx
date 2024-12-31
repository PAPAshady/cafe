import { cloneElement } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { categories } from '../../data';
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
    </div>
  );
}
