import React, { Component } from 'react';
import Task from './Task';

const styles = {
  container: {
    border: 'solid black 1px',
    width: '300px',
    height: '100%',
    display: 'inline-flex',
    flexDirection: 'column',
    marginRight: '3em',
  },
  taskContainer: {
    padding: '15px',
    border: 'solid teal 4px',
    overflow: 'auto',
    height: 'inherit',
  },
  header: {
    border: 'solid green 1px',
    padding: '15px',
    textAlign: 'center',
  },
}

class StoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [{
        id: 'task-1',
        task: 'Create a header'
      }, {
        id: 'task-2',
        task: 'Flip the table'
      }, {
        id: 'task-3',
        task: 'Walk the dog'
      }, {
        id: 'task-4',
        task: 'Go to sleep',
      }]
    }

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(task) {
    const { tasks } = this.state;
    tasks.push({
      id: `task-${tasks.length + 1}`,
      task
    })
    this.setState({
      tasks
    });
  }

  deleteTask(id) {
    console.log(id)
    const { tasks } = this.state;
    for (let i = 0; i < tasks.length; i += 1){
      if (tasks[i].id === id) tasks.splice(i, 1);
    }

    this.setState({
      tasks
    })
  }

  render() {
    // console.log(this.state.tasks)
    const taskComponents = this.state.tasks.map((task) => {
      return <Task 
        key={task.id}
        id={task.id}
        task={task.task}
        handleDel={this.deleteTask}/>
    })

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          Task
          <span style={{float: 'right'}} onClick={() => {this.addTask('hello')}}>Add</span>
        </div>
        <div style={styles.taskContainer}>
          {taskComponents}
        </div>
      </div>
    );
  }
}

export default StoryContainer;