import React, { Component } from 'react';
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
  DropdownItem
} from 'reactstrap';

import logo from './logo.svg';
import './App.css';

// Текст вебсайта
const siteLogoText = 'Стартер+';

const PageNavigation = () => {
  return <div />;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{siteLogoText}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services">Услуги</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contacts">Контакты</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#map">Как к нам проехать</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">О Нас</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
