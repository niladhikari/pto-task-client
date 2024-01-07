import { NavLink } from "react-router-dom";

import './SearchBar.css';

const Navbar = () => {
  const links = (
    <>
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Our Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/order/salad"}>Order Food</NavLink>
        </li>
      </>
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar">
        <a className="btn btn-ghost text-xl">pti.</a>
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
              <ul className="p-2">{links}</ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
