import Header from "../../shared/Header/Header";
import LeftSIdeNav from "../../shared/LeftSideNav/LeftSIdeNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSIdeNav></LeftSIdeNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-2xl">News comming soon</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
