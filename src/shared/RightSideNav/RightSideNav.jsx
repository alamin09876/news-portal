import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone2 from "../../assets/class.png";
import qZone1 from "../../assets/playground.png";
import qZone from "../../assets/swimming.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl mb-4">Login With</h2>
        <button className="btn btn-outline w-full mb-3">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-2xl mb-4">Find Us On</h2>
        <a href="" className="border rounded-t-lg flex items-center p-4">
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a href="" className="border-x flex items-center p-4">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a href="" className="border rounded-b-lg flex items-center p-4">
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>
      <div className="p-4">
        <h2 className="text-2xl mb-4">Q-Zone</h2>
        <img src={qZone} alt="" />
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
