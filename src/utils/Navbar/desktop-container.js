import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Responsive, Visibility } from 'semantic-ui-react';
import getWidth from './getWidth';
import Navbar from './navbar';
import './navbar.css';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, header, banner } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <img className="home-container" src={banner} alt="Home Banner" />
        <Visibility
          className="nav-container no-border"
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Navbar fixed={fixed} />
        </Visibility>
        {header}

        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;

DesktopContainer.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  banner: PropTypes.node
};
DesktopContainer.defaultProps = {
  children: null,
  header: null,
  banner: null
};
