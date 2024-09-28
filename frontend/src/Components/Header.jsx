import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-between pl-[5%] pr-[5%] pt-4 h-[70px] border  shadow-md">
      <div>
        <Link to="/">
          {" "}
          <h2 className="text-2xl font-bold">smartNotes</h2>
        </Link>
      </div>
      <div className="ml-auto space-x-5">
        <Link to="signup">
          <button className="bg-black px-3 py-1.5 rounded-md text-white font-semibold ">
            signup
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-gray-200 px-3 py-1.5 rounded-md text-black font-semibold ">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
