import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {" "}
      <div className="bg-green-200 rounded-lg">
        <div className="flex justify-between px-5 shadow-lg py-5 ">
          <div className="text-2xl font-bold">
            <h1>AMAZON</h1>
          </div>
          <nav className="flex justify-around gap-5 text-lg font-medium">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
