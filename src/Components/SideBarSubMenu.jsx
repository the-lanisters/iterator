import React, { useState } from 'react';

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

const SideBarSubMenu = (props) => {
  return (
    <div style={styles.projectName}>
        <div style={styles.title}>
          Members
        </div>
        <div style={styles.membersContainer}>
          <div style={styles.member}>
            <img style={styles.memberImg} src="http://chittagongit.com/download/96696"/> John Smith
          </div>
          <div style={styles.member}>
            <img style={styles.memberImg} src="https://image.flaticon.com/icons/png/512/219/219969.png"/> Sue Baker
          </div>
          <div style={styles.member}>
            <img style={styles.memberImg} src="https://image.flaticon.com/icons/png/512/190/190614.png"/> Mister Fu
          </div>
        </div>
      </div>
  );
}

export default SideBarSubMenu;