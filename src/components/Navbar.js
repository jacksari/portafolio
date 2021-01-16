import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <p className="logo-jack">Jack<span>Sari</span></p>
        </Link>

        <button onClick={toggleSidebar} type="button" className="toggle-btn">
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
