import { NavLink } from "react-router-dom";


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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      
        <a className="btn btn-ghost text-xl">pti.</a>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal ">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2">
                {links}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
