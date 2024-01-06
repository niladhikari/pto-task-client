import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import './Button.css';
const Footer = () => {
  return (
    <div className="bg-orange-300">
      <div className="flex max-w-7xl mx-auto items-center">
        <div className="w-full lg:w-4/6">
          <p className="font-bold text-2xl mb-3 text-center lg:text-left">
            Pti.
          </p>
          <div className="input-group">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-warning w-full max-w-xs"
            />
            <button type="button" className="subscribe-button">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="font-bold">Copyright © 2024 - All right reserved</p>
            <div className="flex items-center gap-3 px-6">
              <a
                className=""
                href="https://www.linkedin.com/in/hridoy-adhikari-b46051270/"
                target="blank"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </a>
              <a href="https://github.com/niladhikari" target="blank">
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/hridoy.adhikari.790"
                target="blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          {/* 'hidden lg:block' will hide the image on small screens */}
          <img src="https://i.ibb.co/xJxt2vr/Image2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
