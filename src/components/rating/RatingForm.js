import React, { Component } from "react"
import "./Rating.css"


export default class RatingCard extends Component {
state ={
    date: "",
    rate: "",
    activitiesId: "",
    name: ""
}

handleFieldChange = evt => {
    let stateToChange = {}
    stateToChange[evt.target.name] = evt.target.id
    this.setState(stateToChange)
}
handleDateChange = evt => {
  let stateToChange = {}
  stateToChange[evt.target.name] = evt.target.value
  this.setState(stateToChange)
}

updateExisting = evt => {
    evt.preventDefault()
      const rating = {
        rate: parseInt(this.state.rate),
        activitiesId: parseInt(this.state.activitiesId),
        date: this.state.date,
        name: this.state.name,
      };
      console.log(rating)  
      this.props.addRating(rating)
        .then(alert("Saved!"))

}

componentDidMount() {

      this.setState({
        rate: 1,
        activitiesId: 1
      }
      );
}

    render() {
      const activities = this.props.activities
      if (activities.length === 0) {return <div><br></br><br></br>No activities</div>}
        return (
          <React.Fragment>
      <section>
      <div className="newActivityForm">
      <p>How did it go today?</p>
      <input
           type="date" 
           name="date"
           id="date"
           onChange={this.handleDateChange}>
        </input>
        <br></br>
        <br></br>
              <section>
              <div className="form-group">
            <label htmlFor="activities"></label>
            <select
              defaultValue=""
              name="name"
              id="name"
              onChange={this.handleDateChange}
              >
              <option>Select: </option>
              {this.props.activities.map(a => (
                <option key={a.id} id={a.name} value={a.name} onChange={this.handleDateChange}>
                  {a.name}
                </option>
              ))}
            </select>
            <br></br>
            <br></br>
            <h5> Rating: </h5>
          </div>
          <div>
              <input 
                onChange={this.handleFieldChange}
                type="radio"
                id="0"
                name="rate"
                >
              </input>
              <input 
                onChange={this.handleFieldChange}
                type="radio"
                id="25"
                name="rate"
                >
              </input>
              <input 
                onChange={this.handleFieldChange}
                type="radio"
                id="50"
                name="rate"
                >
              </input>
              <input 
                onChange={this.handleFieldChange}
                type="radio"
                id="75"
                name="rate"
                >
              </input>
              <input 
                onChange={this.handleFieldChange}
                type="radio"
                id="100"
                name="rate"
                >
              </input>
              </div>
              <br></br>
          </section>

          <button className="btn btn-primary"
          onClick={this.updateExisting}> 
              Save
          </button>
          </div>
          </section>
          </React.Fragment>
)
}}