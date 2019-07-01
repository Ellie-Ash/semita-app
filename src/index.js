import React from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Semita from "./components/Semita"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"




ReactDOM.render(
<Router>
    <Semita />
</Router>,
document.getElementById('root'));