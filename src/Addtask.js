import React, { Component } from 'react'


class Addtask extends Component {
    constructor() {
        super();
        this.justsubmitted = this.justsubmitted.bind(this);
    }

     /**
     * function that take value from user input
     */
    justsubmitted(event) {
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);
    }
    render() {
        return (
            <div>
                <form className='list-todoapp-top' onSubmit={this.justsubmitted}>
                    <input className='search-todoapp' placeholder='Add Task - Press Enter' type="text"></input>
                </form>
            </div>
        );
    }
}

export default Addtask