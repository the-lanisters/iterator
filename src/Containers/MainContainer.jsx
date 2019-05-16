import React, { Component } from 'react';
import Header from '../Components/Header';
import ProjectsContainer from './ProjectsContainer';
import ProjectContainer from './ProjectContainer';

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  subContainer: {
    position: 'absolute',
    top: '60px',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
  }
}

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Header />
        <div style={styles.subContainer}>
          {/* <ProjectsContainer /> */}
          <ProjectContainer />
        </div>
      </div>
    );
  }
}

export default MainContainer;