//import {Chart} from 'react-google-charts';
import ProgressBar from 'react-bootstrap/ProgressBar'
import React, {Component} from "react"
import "./Progress.css"

export default class Progress extends Component {


// categoryColor() {
// let yellow = "warning"
// let red = "danger"
// let blue = "info"
// let green = "success"
// const activities = this.props.activities;
// const category = activities.map(activity => activity.category)

// if (category === "Diet") {
//     return green
// } else if (category === "Health") {
//     return red
// } else if (category === "Learning") {
//     return blue
// } else if (category === "Other") {
//     return yellow
// }

// }


 
render() {


return(
<React.Fragment>
<h5>Progress</h5> 
<div className="bars">

{this.props.rating.map(r => (
    <ProgressBar
    key={r.id} variant={"info"} label={r.name + " " + r.date} now={r.rate}>
  
</ProgressBar>
))}
</div>





<h5> Awards </h5>
<div> {this.props.rating.map(r => (
    <div>

{(() => {
    if (r.rate === 100) {
      return (
        <div className="awards">
        <p>Award Icon</p>
        <p>for {r.name}</p>
        <p>{r.date}</p>
        </div>
      )
    } else {
      return (
        null
      )
    } 

  })()}



    </div>
))} </div> 
</React.Fragment>
)
}

}






// state = {
//     chartData: []
// }
//    createActivity = () => {
//         const activities = this.props.activities;
//         const name = activities.map(activity =>
//             activity.name
      
//         )
//         return name
//       }

//     createRate = () => {
//         const rating = this.props.rating;
//         const rate = rating.map(rate =>
//             rate.rate
//         )
//        return rate
//       }

//     createDate = () => {
//           const rating = this.props.rating;
//           const date = rating.map(rate =>
//             rate.date
//           )
//           return date
//       }


  

//       render() {
//           const name = this.createActivity()
//           console.log("name", name)
//           const rate = this.createRate()
//           console.log("rate", rate)
//           const date = this.createDate()
//           console.log("date", date)


//             return(
//                 <React.Fragment>
//                 <section className="ChartCard">
//                     {
//                 <Chart
//                 width={'600px'}
//                 height={'400px'}
//                 chartType="BarChart"
//                 loader={<div>Creating your chart...</div>}
//                 className="inChart"
//                 data={[

//                     ["Semita",
//                     ...name],

//                     ["Activity",
//                     ...rate],

                

//                 ]}
//                 options={{
//                     title: 'My Progress',
//                     chartArea: { width: '50%' },
//                     isStacked: true,
//                     colors: ['tomato', 'orange','yellowgreen', 'lightskyblue', 'royalblue'],
//                     hAxis: {
//                         title: 'My Progress',
//                         minValue: 0,
//                     },
//                     vAxis: {
//                         title: date,
//                     },
//                 }}
//                 />
//                 }
//                 </section>
//                 </React.Fragment>
//             )
//          }}

