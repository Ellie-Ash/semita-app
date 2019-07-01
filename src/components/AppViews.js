import React, { Component } from "react"
import { Route } from 'react-router-dom'
import WelcomeCard from "./welcome/WelcomeCard"
import RatingForm from "./rating/RatingForm"
import RatingManager from "./rating/RatingManager"
import ActivitiesManager from "./activities/ActivitiesManager"
import Progress from "./chart/Chart"
import ActivitiesForm from "./activities/ActivitiesForm"
import ActivitiesList from "./activities/ActivitiesList";
import Register from "./register/Register"
import UsersManager from "./register/UsersManager"

export default class AppViews extends Component {
    state = {
        activities: [],
        rating: [],
        users: []
    };

addRating = (rating) =>
    RatingManager.post(rating)
    .then(() => RatingManager.getAll())
    .then(rating =>
        this.setState({
        rating: rating
    })
);

addUsers = (users) =>
    UsersManager.post(users)
    .then(() => UsersManager.getAll())
    .then(users =>
        this.setState({
        users: users
    })
);

addActivity = (activities) =>
    ActivitiesManager.post(activities)
    .then(() => ActivitiesManager.getAll())
    .then(activities =>
        this.setState({
        activities: activities
    })
);
deleteActivity = (id) => {
    const newState = {};
    ActivitiesManager.deleteActivity(id)
        .then(ActivitiesManager.getAll)
        .then(activities => {
            console.log("after deleting activity", activities);
            newState.activities = activities
        })
        .then(() => this.setState(newState))
};

componentDidMount() {
    console.log("didmount");
    const newState = {}
    RatingManager.getAll()
        .then(rating => newState.rating = rating)
        .then(() => this.setState(newState))
    ActivitiesManager.getAll()
        .then(activities => newState.activities = activities)
        .then(() => this.setState(newState))
    UsersManager.getAll()
        .then(users => newState.users = users)
        .then(()=> this.setState(newState))
};


render() {
    return(
    <React.Fragment>
    <Route exact path = "/welcome"
        render = {(props) => {
         return <WelcomeCard {
                    ...props
            }
            users={this.state.users}
            />
            }
        }/>
    <Route exact path = "/register"
        render = {(props) => {
         return <Register {
                    ...props
            }
            users={this.state.users}
            addUsers={this.addUsers}
            />
            }
        }/>
    <Route exact path = "/my-log"
        render = {(props) => {
         return <RatingForm {
                    ...props
            }
            activities = {this.state.activities}
            rating = {this.state.rating}
            addRating = {this.addRating}
            addActivity = {this.addActivity}/>
        }
        }/>
        <Route exact path = "/home"
        render = {(props) => {
         return <ActivitiesList {
                    ...props
            }
            activities = {this.state.activities}
            rating = {this.state.rating}
            addRating = {this.addRating}
            deleteActivity = {this.deleteActivity}/>
            }
        }/>
        <Route path = "/activities/new"
                render = {(props) => {
                        return <ActivitiesForm {
                            ...props
                        }
                        activities = {this.state.activities}
                        addActivity = {this.addActivity}/>
                    }
                }/>
        <Route exact path = "/progress"
        render = {(props) => {
         return <Progress {
                    ...props
            }
            addRating = {this.addRating}
            rating = {this.state.rating}
            addActivity = {this.addActivity}
            activities = {this.state.activities}/>
            }
        }/>
         
         </React.Fragment>
    )
}
}