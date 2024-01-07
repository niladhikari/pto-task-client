import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const PopularItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const popularItems = items.filter((item) => item.IsPopular);

  return (
    <div className="my-16 lg:my-32">
        <div className="flex justify-between items-center mb-3 px-3">
            <h1 className="font-bold text-2xl">Popular</h1>
            <button className="font-bold text-orange-300">Add Item</button>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {popularItems.map((item) => (
          <SwiperSlide key={item.Id}>
            <div className="flex flex-col items-center">
              <img className="h-40 lg:h-72 rounded-xl" src={item.ImageUrl} alt="" />
              <h3 className="text-lg md:text-2xl text-orange-400">{item.Name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularItems;
