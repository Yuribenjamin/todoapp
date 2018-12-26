import React, { Component } from 'react'


class Todoapp extends Component {
    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove(e) {
        let value = e.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render() {
        /**
         * using .map() to produces an elements
         */
        let items = this.props.tasks.map((x,y) =>{
            return <li className='todo-list-item' key={y}><span className='todo-details'>{x}</span><button className='todoapp-remove' onClick={this.remove}>x</button></li>
        });
        return (
            <div className='showing-todoapp'>
                <ol className='todo-list'>
                    {items}
                </ol>
            </div>
        );
    }
}

export default Todoapp