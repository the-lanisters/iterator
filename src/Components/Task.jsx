import React from 'react';

const Task = (props) => {
  const { id, task, handleDel } = props;
  return (
    <div style={{
      border: 'solid turquoise 1px',
      margin: '15px',
      padding: '1em',
      borderRadius: '4px',
    }}>
      {task}
      <span style={{float: 'right'}} onClick={() => handleDel(id)}>delete</span>
    </div>
  );
}

export default Task;