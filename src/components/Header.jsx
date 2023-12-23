import React, { useState, useContext } from 'react';
import SearchBar from './SearchBar';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Col,
  NavItem,
  NavLink,
  Input,
  Form,
  Label,
  FormGroup,
  Row,
  Button
} from 'reactstrap';
import Logo from './Logo';
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='position-fixed top-0 start-0 end-0 navbar-z-index'>
      <Navbar color='dark' expand="md" dark container>
        <Logo />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <SearchBar />
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#" className='active'>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                SPORTS BIKES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                AFFORDABLE BIKES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                USED BIKES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                CONTACT US
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;