import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between px-10 shadow-lg py-7 ">
        <div className="text-2xl font-bold">
          <h1>AMAZON</h1>
        </div>
        <nav className="flex justify-around gap-5">
          <Link to={"/"}>home</Link>
          <Link to={"/products"}>products</Link>
          <Link to={"/dashboard"}>dashboard</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
