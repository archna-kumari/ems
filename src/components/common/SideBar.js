import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="/settings">Settings</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="/profile">Profile</Link>
                </div>
            </div>
        )
    }
}

export default SideBar
