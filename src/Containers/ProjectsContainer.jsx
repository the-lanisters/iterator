import React, { Component } from 'react';
import ProjectIcon from '../Components/ProjectIcon';

const styles = {
  container: {
    padding: '2em 2em 0 2em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // border: 'solid purple 1px',
    // backgroundColor: 'orange',
    flexGrow: 1,
    overflow: 'auto',
  },
  subContainer: {
    display: 'grid',
    width: '50%',
    gridTemplate: 'auto / 1fr 1fr 1fr',
  },
  box: {
    height: 'auto',
    margin: '1em',
    border: 'solid black 1px',
  }
}

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
    this.createProject = this.createProject.bind(this);
  }

  createProject() {
    console.log('creating project');
  }

  render() {
    return (
      <div style={styles.container}>
        Projects Container
        <div style={styles.subContainer}>
          <div
            onClick={this.createProject}
            style={styles.box}
          >New Project</div>
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
    <ProjectIcon /> 
        </div>
      </div>
    );
  }
}

export default ProjectsContainer;