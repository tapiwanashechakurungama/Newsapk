import { Link } from "react-router-dom";
import "./../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <div className="Navbar ">
        <div className="container ">
          <nav className="container flex justify-between">
            <Link to="/" className="text-2xl">
              TopTrendsWorldWide
            </Link>
            <ul className="flex gap-10 ul-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Politics">Politics</Link>
              </li>
              <li>
                <Link to="/Soccer">Soccer</Link>
              </li>
              <li>
                <Link to="/Business">Business</Link>
              </li>
              <li>
                <Link to="/Shopping">Shopping</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="phone-humburger">
        <div className="container flex justify-between">
          <Link to="/" className="text-2xl">
            TopTrendsWorldWide
          </Link>
          <h3 className="text-2xl">
            <CiMenuFries />
          </h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
