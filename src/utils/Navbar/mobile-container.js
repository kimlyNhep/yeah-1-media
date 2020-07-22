import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Responsive, Sidebar, Menu, Icon, Visibility } from 'semantic-ui-react';
import getWidth from './getWidth';
import './navbar.css';
import logo from '../../pictures/logo.png';
import logoFixed from '../../pictures/logo-fixed.png';

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, header, banner } = this.props;
    const { sidebarOpened, fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>
        <img className="home-container" src={banner} alt="Home Banner" />

        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          className="nav-container"
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            className="no-border invert-navbar"
          >
            <Menu.Menu position="left">
              {!fixed ? (
                <img src={logo} alt="logo" width="112px" />
              ) : (
                <img src={logoFixed} alt="logo" width="112px" />
              )}
            </Menu.Menu>
            <Menu.Item position="right" onClick={this.handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
        </Visibility>
        {header}

        {children}
      </Responsive>
    );
  }
}

export default MobileContainer;

MobileContainer.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  banner: PropTypes.node
};
MobileContainer.defaultProps = {
  children: null,
  header: null,
  banner: null
};
