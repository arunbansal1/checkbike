import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' expand="md" dark container>
        <NavbarBrand href="/">Check<span className='bike-logo'>Bike</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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