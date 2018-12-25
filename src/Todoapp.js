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
            return <li key={y}><span>{x}</span><button onClick={this.remove}>x</button></li>
        });
        return (
            <div>
                <ol>
                    {items}
                </ol>
            </div>
        );
    }
}

export default Todoapp