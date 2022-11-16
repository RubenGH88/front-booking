import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  
  
    let activeStyle = {
      textDecoration: "none",
      color: "#fa050579",
    };
  
    return (
      <nav className="navBarStyle">
        <div className="wrap-nav">
          <div>
            <NavLink
              className="navBarLink"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>

            <NavLink
              className="navBarLink"
              to="/booking"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Booking
            </NavLink>
          </div>
  
        </div>
      </nav>
    );
  }
  
  export default NavBar;