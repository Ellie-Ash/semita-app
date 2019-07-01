import React, { Component } from 'react'
import "./Activities.css"

export default class ActivitiesList extends Component {


    render() {
    
        return (
            <React.Fragment>
                <br></br>
            <div className="activitiesButton">
                <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/activities/new")}
                        }>
                    Create Log
                </button>
            </div>

            <section className="activities">
            {
             this.props.activities.map(activities => 
                    <div key={activities.id} className="insideActivities">
                        <div className="">
                            <h5 className="">
                            <div className="categories">
                            
                            {(() => {
        if (activities.category === "Diet") {
          return (
            <div>Diet Icon </div>
          )
        } else if (activities.category === "Health") {
          return (
            <div>Health Icon</div>
          )
        } else if (activities.category === "Other") {
            return (
              <div>Other Icon</div>
            )
        } else if (activities.category === "Learning"){
          return (
            <div>Learning Icon</div>
          )
        } 

      })()}
                            </div>
                                {activities.name}</h5>
                               <p> {activities.notes}</p>
                                <br></br>
                                <button className="btn btn-success"
                                    onClick={() => this.props.deleteActivity(activities.id)}
                                    >Delete</button>
                        </div>
                    </div>
                )
            }
            </section>
        </React.Fragment>
        )
        
    }
}