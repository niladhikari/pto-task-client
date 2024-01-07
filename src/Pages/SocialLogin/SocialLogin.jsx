

import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import useAuth from "../../Hook/useAuth";


const SocialLogin = () => {
  const { SignInGoogle } = useAuth();
  const navigate = useNavigate();


  const handleSocialLogin = () => {
    SignInGoogle()
      .then(() => {
        toast.success(" Successfully Login");
        setTimeout(() => {
          navigate("/");
        }, 2000)
      })

      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <div className="p-4 space-y-3 mb-7 text-center grid w-96 m-auto">
        <button
          onClick={handleSocialLogin}
          className="btn btn-outline  text-blue-600 "
        >
          <FaGoogle></FaGoogle>
          Google Login
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SocialLogin;