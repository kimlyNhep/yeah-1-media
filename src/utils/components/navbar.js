import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../pictures/logo.png';

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
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
        </Menu>
      </div>
    );
  }
}
