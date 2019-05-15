import React from 'react';
import SubMenu from './SideBarSubMenu';

const styles = {
  container: {
    position: 'absolute',
    width: '20em',
    border: 'solid black 1px',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'grey',
  },
  projectName: {
    marginBottom: '1em',
    backgroundColor: 'white',
  },
  membersContainer: {
    backgroundColor: 'green',
    // height: '15em',
  },
  title: {
    height: '2em',
    padding: '0.5em',
    fontSize: '1.25em',
    borderBottom: 'solid 1px black',
  },
  member: {
    padding: '1em',
    borderBottom: 'solid 1px black',
  },
  memberImg: {
    width: '3em',
    height: 'auto',
    verticalAlign: 'middle',
    margin: '0.25em',
  }
}

const Sidebar = () => {
  return (
    <div style={styles.container}>
      <div style={{...styles.projectName, ...styles.title}}>
        Project Name
      </div>
      <SubMenu />
    </div>
  );
}

export default Sidebar;