import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../pictures/logo.png';
import logoFixed from '../../pictures/logo-fixed.png';
import './navbar.css';

class Navbar extends Component {
  state = { activeItem: 'HOME' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { fixed } = this.props;

    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
        className="menu-navbar"
      >
        <Menu.Menu position="left">
          {!fixed ? (
            <img src={logo} alt="logo" width="112px" />
          ) : (
            <img src={logoFixed} alt="logo" width="112px" />
          )}
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            name="HOME"
            active={activeItem === 'HOME'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="ABOUT"
            active={activeItem === 'ABOUT'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="SERVICES"
            active={activeItem === 'SERVICES'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="WORK"
            active={activeItem === 'WORK'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="NEWS"
            active={activeItem === 'NEWS'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="CONTACT"
            active={activeItem === 'CONTACT'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  fixed: PropTypes.bool
};

Navbar.defaultProps = {
  fixed: false
};
