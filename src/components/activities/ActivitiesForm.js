import React, { Component } from "react";
import "./Activities.css"

export default class ActivitiesForm extends Component {
  // Set initial state
  state = {
    name: "",
    notes: "",
    category: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewActivity = evt => {
    evt.preventDefault();
    if (this.state.name === "") {
      window.alert("Please provide a name");
    } else {
      const activity = {
        name: this.state.name,
        notes: this.state.notes,
        category: this.state.category,
        userId: this.state.userId
      };

      // Create the animal and redirect user to animal list
      this.props
        .addActivity(activity)
        .then(() => this.props.history.push("/home"));
    }
  };

  render() {
    return (
      <React.Fragment>

        <form className="newActivityForm">
        <p> Create something to track in the fields below. </p>
          <div className="form-group">
          <label htmlFor="activityCategory">Category:</label>
          <br></br>
            <select
            defaultValue=""
            name="category"
            id="category"
            onChange={this.handleFieldChange}>
                <option className="">
                </option>
                <option className="health">
                    Health
                </option>
                <option className="learning">
                    Learning
                </option>
                <option className="diet">
                    Diet
                </option>
                <option className="other">
                    Other
                </option>
            </select>
            <br></br>
            <br></br>
            <label htmlFor="activityName">Name:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="activityNotes">Notes:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="notes"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewActivity}
            className="btn btn-primary"
          >
            Add
          </button>
        </form>
      </React.Fragment>
    );
  }
}