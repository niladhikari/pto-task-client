
import PopularItems from "./PopularItems";
import RecommendedItems from "./RecommendedItems";




const Home = () => {
 

  // const recommendedItems = item.filter((item) => item.IsRecommended);


  return (
    <div>
      <div className="mt-20 lg:bg-orange-300 rounded-2xl mb-10">
        <div className="flex flex-col lg:flex-row text-center lg:text-left items-center">
          <div className="p-4 lg:p-0 lg:pl-20 lg:text-white ">
            <h1 className="text-3xl lg:text-6xl font-semibold">
              Deliver Food To Your Door Step !
            </h1>
            <p className="mt-6 text-gray-200">
              Authentic Food,Quick Service,Fast Delivery
            </p>
          </div>
          <div className="bg-orange-300 rounded-2xl mx-2">
            <img src="https://i.ibb.co/2F5dkr4/Image1.png" alt="" />
          </div>
        </div>
      </div>
      <div>
      <PopularItems></PopularItems>
      </div>
      <div>
        {/* {recommendedItems.map((item) => (
          <RecommendedItems key={item.Id} item={item}></RecommendedItems>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
