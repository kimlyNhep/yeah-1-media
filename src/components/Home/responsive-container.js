import PropTypes from 'prop-types';
import React from 'react';
import DesktopContainer from './desktop-container';
import MobileContainer from './mobile-container';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

ResponsiveContainer.defaultProps = {
  children: null,
};
