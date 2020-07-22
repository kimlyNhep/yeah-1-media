import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DesktopContainer from './desktop-container';
import MobileContainer from './mobile-container';

class ResponsiveContainer extends Component {
  state = {};

  render() {
    const { children, header, banner } = this.props;
    return (
      <div>
        <DesktopContainer header={header} banner={banner}>
          {children}
        </DesktopContainer>
        <MobileContainer header={header} banner={banner}>
          {children}
        </MobileContainer>
      </div>
    );
  }
}

export default ResponsiveContainer;

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  banner: PropTypes.node
};

ResponsiveContainer.defaultProps = {
  children: null,
  header: null,
  banner: null
};
