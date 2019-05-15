import React, { useState } from 'react';

const styles = {
  projectName: {
    marginBottom: '1em',
    backgroundColor: 'white',
  },
  membersContainer: {
    backgroundColor: 'green',
  },
  title: {
    height: '1em',
    padding: '0.5em',
    fontSize: '1.25em',
    borderBottom: 'solid 1px black',
  },
  member: {
    padding: '0.5em',
    borderBottom: 'solid 1px black',
  },
  memberImg: {
    width: '3em',
    height: 'auto',
    verticalAlign: 'middle',
    margin: '0.25em',
  },
  inActive: {
    display: 'none'
  }
}

const SideBarSubMenu = (props) => {
  const [active, useActive] = useState(false);
  let activeStyle = active ? {} : styles.inActive;
  return (
    <div style={styles.projectName}>
        <div style={styles.title} onClick={() => useActive(!active)}>
          Members
        </div>
        <div style={{...styles.membersContainer, ...activeStyle}}>
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