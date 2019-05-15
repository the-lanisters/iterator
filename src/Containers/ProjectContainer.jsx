import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';

const styles = {
  container: {
    
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
      </div>
    );
  }
}

export default ProjectContainer;