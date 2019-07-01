import React, { Component } from "react"



export default class Register extends Component {
    state = {
        username: "",
        password: "",
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      constructNewUser = evt => {
        evt.preventDefault();
       
          const newUser = {
            username: this.state.username,
            password: this.state.password
          };

          
          this.props
          .addUsers(newUser)
                  .then(() => sessionStorage.setItem(
                    "credentials", this.state.username
                    ))
          .then(() => this.props.history.push("/home"));

      };

    render() {
        return (
            <React.Fragment>
            <form
            className="WelcomeCard">
                <h1>Semita</h1>
                <label htmlFor="inputUsername">
                    New username:
                </label>
                <input onChange={this.handleFieldChange} type="username"
                       id="username"
                       placeholder=""
                       required="" autoFocus="" />
                       <br></br>
                <label htmlFor="inputPassword">
                    New password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder=""
                       required="" />
                       <br></br>
                <button type="submit"
                className="btn btn-primary LoginSubmit"
                onClick={this.constructNewUser}>
                    Create Account
                </button>
                <br></br>
                {/* <p> Already have an account? </p>
                <button
                className="btn btn-primary"
                onClick={() => this.props.history.push("/login")}>
                    Log In
                </button> */}
            </form>
        </React.Fragment>
        )
    }
}
