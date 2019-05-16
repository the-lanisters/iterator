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
    padding: '0.25em',
    borderBottom: 'solid 1px black',
  },
  memberImg: {
    width: '2em',
    height: 'auto',
    verticalAlign: 'middle',
    margin: '0.25em',
  },
  inActive: {
    display: 'none'
  }
}

const teamMembers = [
  {
    name: 'John Smith',
    icon: 'http://chittagongit.com/download/96696',
  }, {
    name: 'Sue Baker',
    icon: 'https://image.flaticon.com/icons/png/512/219/219969.png',
  }, {
    name: 'Mister Fu',
    icon: 'https://image.flaticon.com/icons/png/512/219/219969.png',
  }
]

const SideBarSubMenu = (props) => {
  const [active, useActive] = useState(false);
  let activeStyle = active ? {} : styles.inActive;

  const memberComponents = teamMembers.map((member) => {
    return (
      <div style={styles.member}>
        <img style={styles.memberImg} src={`${member.icon}`}/>
        <span>{member.name}</span>
        <span style={{float: 'right'}}>Delete</span>
      </div>
    );
  });

  return (
    <div style={styles.projectName}>
        <div style={styles.title} onClick={() => useActive(!active)}>
          Members
        </div>
        <div style={{...styles.membersContainer, ...activeStyle}}>
          <div style={styles.member}>
            <img style={styles.memberImg} src="https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png"/> Add New Member
          </div>
          {memberComponents}
        </div>
      </div>
  );
}

export default SideBarSubMenu;