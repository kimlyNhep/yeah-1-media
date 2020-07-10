import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Responsive, Segment, Visibility } from 'semantic-ui-react';
import getWidth from '../../utils/components/helpers';
import HomepageHeading from './homepageheading';
import Navbar from '../../utils/components/navbar';
import './home.css';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <div className="home-container">
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            {/* <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            > */}
            <Navbar fixed={fixed} />
            {/* <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                <Container>
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                  <Menu.Item as="a">Work</Menu.Item>
                  <Menu.Item as="a">Company</Menu.Item>
                  <Menu.Item as="a">Careers</Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted={!fixed}>
                      Log in
                    </Button>
                    <Button
                      as="a"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: '0.5em' }}
                    >
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu> */}
            <HomepageHeading />
            {/* </Segment> */}
          </Visibility>
        </div>
        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;

DesktopContainer.propTypes = {
  children: PropTypes.node,
};
DesktopContainer.defaultProps = {
  children: null,
};
