import React, { Component } from 'react'
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
  NavbarText
} from 'reactstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Nav className="mr-auto">
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Group 3's posts!🤠</NavbarBrand>
            <NavItem>
              <NavLink href="#steve">Steve</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#carrissa">Carrissa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#mackenzie">MacKenzie </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="#tahj">Tahj🤤</NavLink>
            </NavItem>
        </Navbar>
        </Nav>
      </div>
    );
  }
}

export default Navigation;