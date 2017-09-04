import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class AppComponent extends Component {
  render(){
    return (
        <div>
            <h1>Hi</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/users/list">User List</Link></li>
                <li><Link to="/users/create">User Create</Link></li>
            </ul>
        </div>
    );
  }
}