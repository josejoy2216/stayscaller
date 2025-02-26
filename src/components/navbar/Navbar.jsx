import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaAngleDown, FaHotel, FaChartLine, FaChevronDown  , FaClipboardList, FaBookOpen, FaHandshake, FaPhone } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e, menu) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  const home = () => {
    navigate('/');
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-brand" onClick={home}>
          {/* <FaHotel className="nav-icon" /> Stayscaller */}
          Stayscaller
        </div>
        <button className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {/* About Section */}
          <div className="dropdown">
            <a href="#about" onClick={(e) => toggleDropdown(e, "about")}>
              {/* <FaHandshake /> About <FaAngleDown /> */}
              About <FaAngleDown />
            </a>
            <div className={`dropdown-content ${openDropdown === "about" ? "show" : ""}`}>
              <a href="##about">About Stay Scaler</a>
              <a href="#what-we-do">What do we do?</a>
              <a href="#why-choose">Why Choose us?</a>
              {/* <a href="#contact">Contact <FaPhone /> </a> */}
              <a href="#contact">Contact </a>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="dropdown">
            <a href="#services" onClick={(e) => toggleDropdown(e, "services")}>
              {/* <FaClipboardList /> Our Services <FaAngleDown /> */}
                Our Services <FaAngleDown />
            </a>
            <div className={`dropdown-content ${openDropdown === "services" ? "show" : ""}`}>
              <a href="#Online-Revenue-Management">Online Revenue Management</a>
              <a href="#Social-Media-Marketing">Social Media Marketing</a>
              <a href="#PPC">PPC</a>
              <a href="#content-photography">Content & Photography</a>
            </div>
          </div>

          {/* <a href="#blog"><FaBookOpen /> Blog</a> */}
          <a href="#blog"> Blog</a>
          <a className="revenue-btn" href="#revenue"><FaChartLine /> Revenue Challenge</a>
          <a className="analysis-btn" onClick={() => navigate("/hotel-gap-analysis")} >Free Hotel GAP Analysis</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
