import './navbar.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        // Add className="navbar" to the div
        <div className="navbar"> 
            <Link to="/"> Home</Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/profile"> Profile</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/form"> Form</Link>
            <Link to="/hooks"> Hooks</Link>
            <Link to="/counter"> Counter</Link>

        </div>
    );
};
