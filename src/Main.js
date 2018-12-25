import React, { Component } from 'react'
import Addtask from './Addtask'
import TodoApp from './Todoapp'

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <Addtask />
                <TodoApp />
            </div>
        );
    }
}

export default Main