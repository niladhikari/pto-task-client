
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useForm } from "react-hook-form";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const onSubmit = (data) => {
    // Close the modal after sending notice
    const menuItem = {
      Name: data.itemName,
      ImageUrl: data.ImageUrl,
      Price: data.Price,
      IsPopular: data.IsPopular,
      IsRecommended: data.IsRecommended,
    };
    console.log(127,menuItem);

    handleModalClose();
  };

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
        <button onClick={handleModalOpen} className="font-bold text-orange-300">
          Add Item
        </button>
      </div>
      <Modal open={showModal} onClose={handleModalClose} center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Item Name*</span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                {...register("itemName", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className=" lg:flex gap-6">
            {/* Shop Logo */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Item Image*</span>
              </label>
              <input
                type="url"
                placeholder="Item Image Url"
                {...register("ImageUrl", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* location */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                {...register("Price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className=" lg:flex gap-6">
            {/* Shop Logo */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Is Popular*</span>
              </label>
              <input
                type="boolean"
                placeholder="Popular"
                {...register("IsPopular", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* location */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Is Recommended*</span>
              </label>
              <input
                type="boolean "
                placeholder="Recommended"
                {...register("IsRecommended", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary mr-2">Add</button>
            <button onClick={handleModalClose} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
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
              <img
                className="h-40 lg:h-72 rounded-xl"
                src={item.ImageUrl}
                alt=""
              />
              <h3 className="text-lg md:text-2x">
                {item.Name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularItems;
