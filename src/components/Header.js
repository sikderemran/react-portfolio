import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
        <Link to="/" className="btn">Home</Link>
        <Link to="/about" className="btn">About</Link>
        <Link to="/" className="btn">Contact Us</Link>
        <Link to="/" className="btn">Project</Link>
    </div>
  );
}

export default Header;
