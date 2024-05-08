import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";

const Home = () => {
  return (
    <div>
      <div className="space-y-5">
        <Carousel></Carousel>
        <TabCategories></TabCategories>
      </div>
    </div>
  );
};

export default Home;
