import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import "./Button.css";
const Footer = () => {
  return (
    <div className="bg-orange-300">
      <div className="flex max-w-7xl mx-auto items-center">
        <div className="w-full lg:w-4/6">
          <div
            style={{ position: "relative", display: "inline-block" }}
            className="my-10 ml-5 md:ml-52 lg:ml-0 "
          >
            <input
              type="text"
              id="inputField"
              className="rounded-md lg:rounded-2xl w-96 lg:w-[450px] h-10 lg:h-14 pl-4"
              placeholder="search here"
              name="inputField"
              style={{ paddingRight: "40px" }}
            />
            <button
              type="submit"
              className="button bg-orange-600 rounded-md mx-auto mt-1 lg:mt-[10px] p-1 text-white"
              style={{ position: "absolute", right: "5px" }}
            >
              <div className="flex justify-center items-center gap-2">
              <p>Subscribe</p>
              <FaArrowRight />
              </div>
            </button>
          </div>
          <p className="font-bold text-2xl mb-3 text-center lg:text-left">
            Pti.
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="font-bold mb-3">Copyright © 2024 - All right reserved</p>
            <div className="flex items-center gap-3 px-6 mb-10">
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
