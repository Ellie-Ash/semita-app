import React, { Component } from 'react'
import "./WelcomeCard.css"

export default class WelcomeCard extends Component {
    state = {
        username: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    

    handleLogin = (evt) => {
        console.log(this.props.users)
        let allUsers = this.props.users
        let inputUsername = this.state.username
        let inputPassword = this.state.password
        let matchUser = allUsers.find(users => users.username === inputUsername && users.password === inputPassword)
        console.log(this.state.username)
        evt.preventDefault();
        if (this.state.username | this.state.password === ""){
            window.alert("Please sign in");
        } else if (!matchUser){
            window.alert("User not found");
          } else {
        sessionStorage.setItem(
            "credentials",
            matchUser.username,
            
            )
        } if(matchUser) {
            this.props.history.push("/my-log");
            window.alert(`Welcome back ${matchUser.username}!`)
        }
    }




render() {
    return(
        <React.Fragment>

        <div className="WelcomeCard">
        <h1>Semita</h1>
        
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="buttons">
        <div className="RegisterWelcome">
              </div>
            <form
            className="LoginForm">
                <label htmlFor="inputUsername">
                    Username:
                </label>
                <input onChange={this.handleFieldChange} type="username"
                       id="username"
                       placeholder=""
                       required="" autoFocus="" />
                       <br></br>
                <label htmlFor="inputPassword">
                    Password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder=""
                       required="" />
                       <br></br>
                <button type="submit"
                className="btn btn-primary LoginSubmit"
                onClick={this.handleLogin}>
                    Login
                </button>
                <br></br>
                <p> Don't have an account? </p>
                <button
                className="btn btn-primary"
                onClick={() => this.props.history.push("/register")}>
                    Register
                </button>
            </form>
        </div>
        </div>

        </React.Fragment>

    )
}
}