import React from 'react';

const styles = {
  container: {
    width: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    height: '60px',
    borderBottom: 'solid  black 1px',
  }
}

const Header = () => {
  return (
    <div style={styles.container}>
      Im a header
    </div>
  );
}

export default Header;