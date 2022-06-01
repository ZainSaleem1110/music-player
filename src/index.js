import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './global.css'
import {BrowserRouter} from "react-router-dom"
import Landing from './Pages/Landing/Landing'

ReactDOM.render(
    <BrowserRouter>
        <Landing/>  
    </BrowserRouter>,document.getElementById("root")
)