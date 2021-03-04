import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <h3 className="text-white">Multer</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
