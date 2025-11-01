import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-blue-200 rounded-lg">
        <div className="flex justify-between px-5 shadow-lg py-5 ">
          <div className="text-2xl font-bold">
            <h1>AMAZON</h1>
          </div>
          <nav className="flex justify-around gap-5 text-lg font-medium">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-gray-800"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-gray-800"
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-gray-800"
              }
            >
              Dashboard
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
