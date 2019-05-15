import React, { Component } from 'react';

const styles = {
  container: {
    height: '15em',
    margin: '1em',
    border: 'solid black 1px',
  }
}

const ProjectIcon = (props) => {
  const project = 'Im a project';
  return (
    <div style={styles.container}>
      {project}
    </div>
  );
}

export default ProjectIcon;