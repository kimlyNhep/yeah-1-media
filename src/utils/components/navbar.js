import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import logo from '../../pictures/logo.png';

class Navbar extends Component {
  state = { activeItem: 'home' };

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
      >
        <Container>
          <Menu.Menu position="left">
            <img src={logo} alt="logo" width="112px" />
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
        </Container>
      </Menu>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  fixed: PropTypes.bool,
};

Navbar.defaultProps = {
  fixed: false,
};
