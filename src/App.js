import React, { Component } from 'react';
import Main from './Main'
import './App.css';

/**
 * Array Hold tasks
 */
let tasksLists = [];

/**
 * save task to the local storge
 */

let tasks = localStorage.getItem('storedTasks');

if (tasks) {
  tasksLists = JSON.parse(tasks);
}

class App extends Component {
  render() {
    return (
      <div>
        <Main tasks={tasksLists}/>
      </div>
    );
  }
}

export default App;
