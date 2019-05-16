import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import StoryStatus from '../Components/StoryStatus';

const styles = {
  container: {
    border: 'solid green 1px',
    flexGrow: 1,
  }
}

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Sidebar></Sidebar>
        <div style={{padding: '3em', position: 'absolute', top: 0, left: '20em', bottom: 0, right: 0, border: 'solid yellow 2px', overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
          <StoryStatus />
          <StoryStatus />
          <StoryStatus />
          <StoryStatus />
        </div>
      </div>
    );
  }
}

export default ProjectContainer;