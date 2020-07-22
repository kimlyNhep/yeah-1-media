// import PropTypes from 'prop-types';
import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const HomepageHeading = () => (
  <div className="home-header">
    <Header
      as="h1"
      content="CASESTUDY"
      inverted
      style={{
        fontSize: '15px',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: '15rem',
        textAlign: 'center'
      }}
    />

    <div className="view-project-container">
      <Icon
        name="play circle outline"
        inverted
        size="huge"
        className="view-project-icon"
      />
      <div className="view-project-text">VIEW PROJECT</div>
    </div>
  </div>
);

export default HomepageHeading;

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool
// };
// HomepageHeading.defaultProps = {
//   mobile: null
// };
