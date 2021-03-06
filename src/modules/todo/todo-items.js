import React, { Component } from 'react';
export class TodoItems extends Component {
    render() {
        var todoEntries = this.props.entries;
        function createTasks(item) {
            return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}