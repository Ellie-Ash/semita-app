import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



export default class NavBar extends Component {
    render() {
        return (
            <nav className="allNav">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/welcome">Welcome</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/progress">Progress</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-log">My Log</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" onClick={()=> sessionStorage.clear()}>Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}