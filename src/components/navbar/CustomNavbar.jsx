import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Navbar.css'; // Custom CSS

const CustomNavbar = () => {
  return (
    <section className="top-area">
      <div className="header-area">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="bootsnav navbar-sticky navbar-scrollspy"
          data-minus-value-desktop="70"
          data-minus-value-mobile="55"
          data-speed="1000"
        >
          <Container>
            <Navbar.Brand href="#home">
              Stay<span>scaller</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-menu">
              <FaBars color="#ff545a" />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-menu">
              <Nav className="ml-auto" style={{ display: 'flex', flexDirection: 'row' }}>
                <NavDropdown title="About" id="about-dropdown" className="scroll">
                  <NavDropdown.Item href="#what-we-do">What Do We Do</NavDropdown.Item>
                  <NavDropdown.Item href="#why-choose-us">Why Choose Us</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#works" className="scroll">
                  Revenue Challenge
                </Nav.Link>
                <NavDropdown title="Our Services" id="services-dropdown" className="scroll">
                  <NavDropdown.Item href="#online-revenue-management">
                    Online Revenue Management
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#social-media-marketing">
                    Social Media Marketing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#ppc">PPC</NavDropdown.Item>
                  <NavDropdown.Item href="#content-photography">
                    Content & Photography
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#blog" className="scroll">
                  Blog
                </Nav.Link>
                <Nav.Link href="#footer" className="scroll">
                  Contact
                </Nav.Link>
                <Nav.Link href="#footer" className="scroll">
                  Get Free GAP Analysis
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="clearfix"></div>
    </section>
  );
};

export default CustomNavbar;
