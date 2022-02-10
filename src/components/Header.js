import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Project</Link>
    </div>
  );
}

export default Header;
