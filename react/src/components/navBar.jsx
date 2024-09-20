import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
        <div className="gridContainer">
            <h1 className="navLogo">Our Name</h1>
            <button className="navButton">
                <Link to="/home">Home</Link>
            </button>
            <button className="navButton">
            <Link to="/profile">Profile</Link>
            </button>
        </div>
        
    </nav>
  );
}

export default Navbar