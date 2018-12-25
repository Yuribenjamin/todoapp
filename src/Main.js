import React, { Component } from 'react'
import Addtask from './Addtask'
import TodoApp from './Todoapp'


class Main extends Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    /**
     * function to update tasks
     */
    updateList(text) {
        let updatedTasks = this.state.tasks;
        updatedTasks.push(text);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    /**
     * function to remove tasks
     */
    removeTask(text){
        let updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }
    /**
     * function to update local storgae
     */
    updateLocalStorage(updatedTasks) {
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render() {
        return (
            <div>
                <div><h1>Todo App</h1></div>
                <Addtask updateList={this.updateList}/>
                {/**
                * pass tasksLists as props
                */}
                <TodoApp tasks={this.state.tasks} remove={this.removeTask}/>
            </div>
        );
    }
}

export default Main