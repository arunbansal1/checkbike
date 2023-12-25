import React, { useState } from 'react';
import SearchBar from './SearchBar';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className='position-fixed top-0 start-0 end-0 navbar-z-index'>
      <Navbar color='dark' expand="md" dark container>
        <Logo />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto fw-bold" navbar>
            <NavItem>
              <Link to="/" className={'nav-link ' + (location.pathname === '/'? "active": "")} >HOME</Link>
            </NavItem>
            <NavItem>
              <Link to="/brand/bajaj-bikes" className={'nav-link ' + (location.pathname === '/brand/bajaj-bikes'? "active": "")}>Bajaj Bikes</Link>
            </NavItem>
            <NavItem>
            <Link to="/brand/honda-bikes" className={'nav-link ' + (location.pathname === '/brand/honda-bikes'? "active": "")}>Honda Bikes</Link>
            </NavItem>
            <NavItem>
            <Link to="/brand/hero-bikes" className={'nav-link ' + (location.pathname === '/brand/hero-bikes'? "active": "")}>Hero Bikes</Link>
            </NavItem>
            <NavItem>
            <Link to="/brand/contact-us" className={'nav-link ' + (location.pathname === '/brand/contact-us'? "active": "")}>Contact Us</Link>
            </NavItem>
            <NavItem>
            <Link to="/brand/compare" className={'nav-link ' + (location.pathname === '/brand/compare'? "active": "")}>Compare</Link>
            </NavItem>
          </Nav>
          <SearchBar />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;