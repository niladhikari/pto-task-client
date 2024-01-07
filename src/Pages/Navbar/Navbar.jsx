import { Link, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

import "./SearchBar.css";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const handleLogout = () => {
    userSignOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Category</NavLink>
        </li>
        <li>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </li>
      </>
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <a className="btn btn-ghost lg:text-3xl font-mono">pti.</a>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <span className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.95-5-5.78-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.83 2.56 5.31 5.34 5.78a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </span>
      </div>

      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal ">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 z-40">{links}</ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="lg:w-2/4  lg:justify-end hidden lg:flex">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  className="bg-slate-500"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm  btn-ghost font-bold text-red-500"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-orange-300 text-center font-bold text-green-800">
              <RxAvatar className="text-3xl" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
